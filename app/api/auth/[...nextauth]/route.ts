import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // GoogleAuthenticationProvider:{},
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phone: {
          label: "Phone",
          type: "tel",
          placeholder: "Your Phone Number",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        // Check if the Password and user id entered
        // This credentials.password will hassed using "bcrypt" from loging page
        if (!credentials?.phone || !credentials.password) {
          console.log("Please enter Phone number and Password!");
          // throw new Error("Please enter Phone number and Password!");
          return null;
        }

        // Now check the User id exist in the database
        // const user = check the User id exist in the database
        const user = {
          id: "1",
          phone: "01819062270",
          password: "123456",
          email: "amirhossain.limon@gmail.com",
          image:
            "https://lh3.googleusercontent.com/a/ACg8ocLz-hFcTX4itetBnsqim9GglE5eM0qO09JglnD1zfGZsZY=s96-c",
          name: "Md Amir Hossain",
        };

        // Now check with demo data. This will change when DB added
        if (user.phone !== credentials.phone) {
          console.log("Invalid User Id!");
          // throw new Error("Invalid User Id!");
          return null;
        }

        // Check if Password match
        // This credentials.password will checked using "bcrypt" from loging page
        // const passwordMatch = await bcrypt.compaer(
        //   credentials.password,
        //   user.password
        // );
        const passwordMatch = user.password === credentials.password;

        // Now check the Password and user id with server data
        if (!passwordMatch) {
          console.log("Invalid Password!");
          // throw new Error("Invalid Password!");
          return null;
        }

        return user;
      },
    }),
  ],
  // ...add CUSTOM PAGE here
  pages: {
    signIn: "/user/login",
    error: "/user/login",
  },

  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     // User: came from the "authorize" function in credential
  //     // Account: {providerAccountId: undefined, type: 'credentials', provider: 'credentials'}
  //     // Profile: Only return when login with provider (Google).

  //     if (account.provider === "google") {
  //       const { Email, id } = profile;

  //       const existingUser = "await"; //Check if the data is exist in the database

  //       if (!existingUser) {
  //         // Link the Google account with the current user
  //         // You should have access to the current user's ID in the `user` object
  //         // Update DATABASE with the new user's ID
  //       }
  //     }
  //     return true;
  //   },

  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.modify = "Test Token";
  //       // Include Google authentication info in the JWT if available
  //       if (user.googleId) {
  //         token.googleId = user.googleId;
  //       }
  //     }

  //     return token;
  //   },

  //   async session({ session, token }) {
  //     if (token.googleId) {
  //       // Include Google authentication info in the session
  //       session.user.googleId = token.googleId;
  //     }
  //     return session;
  //   },
  // },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };