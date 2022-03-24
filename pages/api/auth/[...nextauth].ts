import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { Session, User, JWT } from '../../../types/next-auth';

interface ISessionCallback {
  session: Session;
  user: User;
  token: JWT;
}

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
    async session({ session, token, user }: ISessionCallback) {
      session.user.username = (!session?.user?.name) ? session.user.username : session?.user?.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      // attach Google UID (stored in token sub)
      session.user.uid = token.sub;

      return session;
    },
  },
});
