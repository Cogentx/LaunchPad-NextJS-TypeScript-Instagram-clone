import NextAuth from 'next-auth';
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
  // default NextAuth sign-in page can be themed
  // theme: {
  //   logo: 'https://links.papareact.com/sq0',
  //   brandColor: '#f13287',
  //   colorScheme: 'auto',
  // },
});
