'use client'

import React, { useEffect, useState } from 'react'
import ReactFlow, { useNodesState, useEdgesState, Background } from 'reactflow'
import 'reactflow/dist/style.css'
import CustomNode from './CustomNode'
import { Paragraph } from './texts/texts'
import { updateNode } from '@/utils/api'

const nodeTypes = {
  custom: CustomNode,
}

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]
const defaultViewport = { x: 0, y: 0, zoom: 1.5 }

const InteractiveFlow = ({ initialNodes, id }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [nodeId, setNodeId] = useState(null)

  const [nodeTitle, setNodeTitle] = useState('')
  const [nodeSubtitle, setNodeSubtitle] = useState('')
  const [newTitle, setNewTitle] = useState('')

  function onNodeClick(event, node) {
    setNodeId(node.id)
  }

  async function handleClick() {
    const updated = await updateNode(id, nodes)
  }

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            name: nodeTitle,
          }
        }
        return node
      })
    )
  }, [nodeTitle, setNodes, nodeId])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            subtitle: nodeSubtitle,
          }
        }
        return node
      })
    )
  }, [nodeSubtitle, setNodes, nodeId])

  return (
    <>
      <button
        onClick={handleClick}
        className="btn btn-outline btn-wide btn-accent"
      >
        Save
      </button>
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
        <div className="absolute text-center right-3 top-3 z-10 text-base text-black  flex flex-col space-y-4 items-start">
          <Paragraph className="text-white">Edit node</Paragraph>
          <input
            placeholder="Name"
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={nodeTitle}
            onChange={(evt) => setNodeTitle(evt.target.value)}
          />
          <input
            placeholder="Speech Part"
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={nodeSubtitle}
            onChange={(evt) => setNodeSubtitle(evt.target.value)}
          />
          {/* <input
            type="color"
            placeholder="Background"
            className="input input-bordered w-full max-w-xs"
            value={nodeBg}
            onChange={(evt) => setNodeBg(evt.target.value)}
          /> */}
        </div>
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </>
  )
}

export default InteractiveFlow
