import type { JWT } from './../node_modules/next-auth/jwt/types.d';
import type { Session, User } from './../node_modules/next-auth/core/types.d';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      uid?: string;
      username?: string;
      name: string;
    };
  }
}

export { Session, JWT, User };
