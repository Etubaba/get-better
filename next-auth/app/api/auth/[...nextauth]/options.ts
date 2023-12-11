import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone",
          type: "text",
          placeholder: "Enter email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        //this is where u need to retrieve user data

        const res = await fetch(
          "https://zeewallet-server.vercel.app/api/v1/auth/login",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();

        if (res.ok && user) return user;
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  //if this pages is not specify the signin page we come as
  // a default from next-auth
  pages: {
    signIn: "/auth",
  },
};
