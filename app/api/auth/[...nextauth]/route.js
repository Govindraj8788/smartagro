import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      // 🔥 Fetch actual MongoDB user (ObjectId)
      const dbUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (dbUser) {
        await prisma.loginLog.create({
          data: {
            userId: dbUser.id, // ✅ correct ObjectId
          },
        });
      }

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
