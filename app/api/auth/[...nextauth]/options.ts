import NextAuth, { NextAuthOptions } from "next-auth";
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
        username: {
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
        const user = {
          id: "1",
          username: "01819062270",
          password: "123456",
          email: "amirhossain.limon@gmail.com",
          image:
            "https://lh3.googleusercontent.com/a/ACg8ocLz-hFcTX4itetBnsqim9GglE5eM0qO09JglnD1zfGZsZY=s96-c",
          name: "Md Amir Hossain",
        };

        return user;
      },
    }),
  ],
};
