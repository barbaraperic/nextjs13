'use client'

import React, { useEffect, useState } from 'react'
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: '1', data: { label: '-' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
const defaultViewport = { x: 0, y: 0, zoom: 1.5 }

function onNodeClick(event, node) {
  console.log('click node', node)
}

const UpdateNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const [nodeName, setNodeName] = useState('')
  const [nodeBg, setNodeBg] = useState('')

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        console.log(node)
        if (node.id === '2') {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          node.data = {
            ...node.data,
            label: nodeName,
          }
        }

        return node
      })
    )
  }, [nodeName, setNodes])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '2') {
          // it's important that you create a new object here
          // in order to notify react flow about the change
          node.style = { ...node.style, backgroundColor: nodeBg }
        }

        return node
      })
    )
  }, [nodeBg, setNodes])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      defaultViewport={defaultViewport}
      elementsSelectable={true}
      minZoom={0.2}
      maxZoom={4}
      attributionPosition="bottom-left"
      onNodeClick={onNodeClick}
    >
      <div className="absolute right-3 top-3 z-10 text-base text-black">
        <label className="block">label:</label>
        <input
          value={nodeName}
          onChange={(evt) => setNodeName(evt.target.value)}
        />

        <label className="mt-3">background:</label>
        <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />
      </div>
    </ReactFlow>
  )
}

export default UpdateNode
