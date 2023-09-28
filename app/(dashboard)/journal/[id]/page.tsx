import Editor from "@/components/Editor"
import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id: string) => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user?.id,
        id,
      }
    }
  })

  return entry
}

const JournalEntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)

  return (
    <div>
      <Editor entry={entry} />
      {params.id}
    </div>
  )
}

export default JournalEntryPage