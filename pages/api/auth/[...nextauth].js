import bcryptjs from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/user';
import db from '../../../utils/db';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) {
        token._id = user._id;
        token.username = user.username;
    }
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
    //   console.log('from jwt',token)
      return token;
    },
    async session({ session, token }) {
      if (token?._id) {
        session.user._id = token._id;
        session.user.username = token.username;
    }
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
    //   console.log('from session',session)
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            username: user.username,
            email: user.email,
            image: 'f',
            isAdmin: user.isAdmin,
          };
        //   console.log('checking the signin')
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],secret: process.env.SECRET
});