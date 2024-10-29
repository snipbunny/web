import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const extendedClient = new PrismaClient().$extends({
  query: {
    user: {
      async create({ args, query }) {
        args.data.password = bcrypt.hashSync(args.data.password, 10);
        return query(args);
      },
      async findFirst({ args, query }) {
        const user = await query(args);
        if(user?.password !== undefined) user.password = "******";
        return user;
      }
    },
  },
});
export type extendedClientType = typeof extendedClient;

if (!global.__prisma) {
  global.__prisma = extendedClient;
}

declare global {
  var __prisma: extendedClientType;
}

global.__prisma.$connect();
export const prisma = global.__prisma;
