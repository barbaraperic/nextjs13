'use client'
import { useState } from 'react'

const ReviewChecklist = ({ questions }) => {
  const input = questions.map((q) => {
    return {
      content: q,
      checked: false,
    }
  })

  const [checkboxInput, setCheckboxInput] = useState(input)

  function handleChange(content) {
    const updated = checkboxInput.map((item) => {
      if (item.content === content.id) {
        return { ...item, checked: !item.checked }
      } else {
        return item
      }
    })
    setCheckboxInput(updated)
  }

  return (
    <div className="form-control ">
      {checkboxInput.map((input, index) => (
        <label key={index} className="cursor-pointer label space-x-2">
          <span className="label-text text-base-100">{input.content}</span>
          <input
            id={input.content}
            onChange={(e) => handleChange(e.target)}
            type="checkbox"
            checked={input.checked}
            className="checkbox checkbox-accent"
          />
        </label>
      ))}
    </div>
  )
}

export default ReviewChecklist
