import { connectDb } from "@/config";
import { UserRole } from "@/lib";
import { User } from "@/models";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phone: {
          label: "Phone:",
          type: "text",
          placeholder: "Phone Number",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        connectDb();
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials

        const user = await User.findOne({ phone: credentials?.phone });

        // When user is not found, return an error
        if (!user) {
          throw new Error(
            JSON.stringify({
              message: "Wrong credentials!",
              status: 401,
            })
          );
        }

        const validPassword = await compare(
          credentials?.password as string,
          user.password
        );

        // When password not matched, return an error
        if (!validPassword) {
          throw new Error(
            JSON.stringify({ message: "Invalid password", status: 401 })
          );
        }

        if (credentials?.phone === user.phone && validPassword) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        // TODO: Need to update this rules for error handling
        const currentUser = await getCurrentUser();
        const returnUrl =
          currentUser?.role === UserRole.inactive
            ? "/inactive"
            : "/user/active";

        if (currentUser) {
          if (currentUser.email === profile?.email) {
            const updatedData = {
              isVerified: true,
              balance: currentUser.balance + 5,
            };
            await User.updateOne({ _id: currentUser.id }, updatedData, {
              new: true,
            });

            // TODO: Need to update this rules, show toast and the get sign out.

            return returnUrl;
          }
        }
        return returnUrl;
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.userData = user;
      }
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user)
        session.user = {
          ...session.user,
          ...token.userData,
        };
      return session;
    },
  },

  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
};
