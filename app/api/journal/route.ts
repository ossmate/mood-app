import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const userId = await getUserByClerkId()

  const entry = await prisma.journalEntry.create({
    data: {
      userId: userId?.id,
      content: "Write about your day!"
    }
  })

  return NextResponse.json({ data: entry })
}
