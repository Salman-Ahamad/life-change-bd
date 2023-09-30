import { User } from "@/models";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";
import { NextResponse } from "next/server";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      profile(profile: GithubProfile) {
        //console.log(profile)
        return {
          ...profile,
          role: profile.role ?? "user",
          id: profile.id.toString(),
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
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
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials

        const user = await User.findOne({ phone: credentials?.phone });

        const validPassword = await compare(
          credentials?.password as string,
          user.password
        );
        if (!validPassword) {
          return NextResponse.json(
            { error: "Invalid password" },
            { status: 400 }
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
    // async redirect({ url, baseUrl }) {
    //   return `${baseUrl}/user/active`;
    // },
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;

      // After JWT, run the middleware authorized callbacks.
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) session.role = token.role;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
};
