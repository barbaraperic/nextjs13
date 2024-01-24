'use client'

import React, { useEffect, useState } from 'react'
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow'
import 'reactflow/dist/style.css'
import CustomNode from './CustomNode'

const nodeTypes = {
  custom: CustomNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'Jane Doe', function: 'noun' },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Jane Doe', function: 'noun' },
    position: { x: 100, y: 200 },
  },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
const defaultViewport = { x: 0, y: 0, zoom: 1.5 }

const InteractiveFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [nodeId, setNodeId] = useState(null)
  const [style, setStyle] = useState({ backgroundColor: '#14ff50' })

  const [nodeName, setNodeName] = useState('')
  const [nodeFunction, setNodeFunction] = useState('')
  const [nodeBg, setNodeBg] = useState('')

  function onNodeClick(event, node) {
    setNodeId(node.id)
    setStyle({ backgroundColor: '#ff1493' })
  }

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            name: nodeName,
          }
        }

        return node
      })
    )
  }, [nodeName, setNodes])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            function: nodeFunction,
          }
        }

        return node
      })
    )
  }, [nodeFunction, setNodes])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
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
      nodeTypes={nodeTypes}
    >
      <div className="absolute right-3 top-3 z-10 text-base text-black space-y-2">
        <label className="block text-white">Word:</label>
        <input
          className="p-1 rounded"
          value={nodeName}
          onChange={(evt) => setNodeName(evt.target.value)}
        />
        <label className="block text-white">Function:</label>
        <input
          className="p-1 rounded"
          value={nodeFunction}
          onChange={(evt) => setNodeFunction(evt.target.value)}
        />

        <label className="mt-3 block text-white">Background:</label>
        <input
          className="p-1 rounded"
          value={nodeBg}
          onChange={(evt) => setNodeBg(evt.target.value)}
        />
      </div>
    </ReactFlow>
  )
}

export default InteractiveFlow
