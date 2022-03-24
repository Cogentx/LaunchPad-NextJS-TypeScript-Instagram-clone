import NextAuth from 'next-auth';
import type { Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // set custom sign-in page (file name must be lowercase)
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      console.log(session);
      return session;
    },
  },
  // callbacks: {
  //   async session({
  //     session({session, token, user}) {
  //       console.log(session)
  //       session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
  //       return session;
  //     }
  //   });
  // }
});
