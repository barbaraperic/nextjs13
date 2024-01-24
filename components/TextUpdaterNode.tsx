'use client'

import { useCallback } from 'react'
import { Handle, Position } from 'reactflow'

const handleStyle = { left: 10, text: 'black' }

const TextUpdaterNode = ({ data }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
    // save the node text
  }, [])

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag text-black text-center py-2  rounded"
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </>
  )
}

export default TextUpdaterNode
