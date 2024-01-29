'use client'
import { createNode } from '@/utils/api'
import { useState } from 'react'

const NewNodeForm = ({ id }) => {
  const [name, setName] = useState('')
  const [speechPart, setSpeechPart] = useState('')

  const speechPartOptions = [
    { value: 'Verb' },
    { value: 'Noun' },
    { value: 'Adjective' },
  ]

  async function handleSubmit(e: any) {
    e.preventDefault()

    const newNode = await createNode(id, name, speechPart)
    console.log(newNode)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="input input-bordered text-black w-full"
      />
      <select
        onChange={(e) => setSpeechPart(e.target.value)}
        className="select text-black select-bordered w-full"
      >
        <option disabled defaultValue="Speech Part">
          Speech Part
        </option>
        {speechPartOptions.map((speechPartOption, index) => (
          <option value={speechPartOption.value} key={index}>
            {speechPartOption.value}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-accent">
        Create
      </button>
    </form>
  )
}

export default NewNodeForm
