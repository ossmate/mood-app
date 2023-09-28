'use client'

import { updateEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const updatedEntry = await updateEntry(entry.id, _value)
      setIsLoading(false)
    }
  })

  return (
    <div>
      <div className="w-full h-full">
        {isLoading && <div>loading...</div>}
        <textarea
          className="w-full h-full p-8 text-xl outline-none"
          name="entry"
          value={value}
          onChange={e => setValue(e.target.value)}
         />

      </div>
      <h1>{entry.content}</h1>
    </div>
  )
}

export default Editor