import { createCookieSessionStorage, Session } from "@remix-run/node";
import { prisma } from "./database.server";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET ?? "dev"],
  },
});

export async function getCurrentUser() {
  const session = await sessionStorage.getSession();

  return await prisma.user.findUnique({
    where: { id: session.get("id") },
  });
}

export const { getSession, commitSession, destroySession } = sessionStorage;
