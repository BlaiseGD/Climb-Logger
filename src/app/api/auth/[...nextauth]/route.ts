import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({session, token}) {
      if (token.sub) {
        session.user.id = token.sub; // attach Google ID
      }
      return session;
    },
    async signIn({user, account, profile}) {
      // hook into SQL here (insert/update user row)
      return true;
    },
  },
});

export { handler as GET, handler as POST };