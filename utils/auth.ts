import { auth } from "@clerk/nextjs"
import { prisma } from "./db"

export const getUserByClerkId = async () => {
  const { userId } = await auth()

  const user = prisma.user.findUnique({
    where: { clerkId: userId as string },
  })

  return user;
}