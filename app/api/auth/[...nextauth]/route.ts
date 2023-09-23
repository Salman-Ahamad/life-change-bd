import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
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
          throw new Error("Please enter Phone number and Password!");
        }

        // Now check the User id exist in the database
        // const user = check the User id exist in the database
        const user = {
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
          throw new Error("Invalid User Id!");
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
          throw new Error("Invalid Password!");
        }

        console.log(user);

        return user;
      },
    }),
  ],
  // ...add CUSTOM PAGE here
  pages: {
    signIn: "/user/login",
    error: "/user/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          // id: user.id, // This may need need to modify when DB added
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          // id: token.id, // This will came from db for the first time we lagged in
        },
      }; // The return type will match the one returned in `useSession()`
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
