'use client'

import { askQuestion } from "@/utils/api"
import { useState } from "react"

const Question = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState()

  const onChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const answer = await askQuestion(value)
    console.log(answer, 'answer@@@@@@@@@@')
    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        disabled={loading}
        value={value}
        onChange={onChange}
        type="text"
        name="question"
        className="border border-black/20 px-4 py-2 text-lg rounded-lg"
      />
      <button
        disabled={loading}
        type="submit"
        className="bg-blue-400 px-4 py-2 rounded-lg text-lg"
      >
        Submit
      </button>
      {loading && <div>loading...</div>}
      {response && <div>{response}</div>}
    </form>
  )
}

export default Question;