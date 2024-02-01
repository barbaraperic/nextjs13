'use client'

import React, { useCallback, useEffect, useState } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'
import CustomNode from './CustomNode'
import { Paragraph } from './texts/texts'
import { updateNode } from '@/utils/api'

const nodeTypes = {
  custom: CustomNode,
}

const defaultViewport = { x: 0, y: 0, zoom: 1.5 }

const InteractiveFlow = ({ id, initialNodes, nodeEdges }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(nodeEdges)
  const [nodeId, setNodeId] = useState(null)

  const [nodeTitle, setNodeTitle] = useState('')
  const [nodeSubtitle, setNodeSubtitle] = useState('')
  const [disabled, setDisabled] = useState(true)

  function onNodeClick(event, node) {
    setNodeId(node.id)
  }

  console.log('edges', edges)

  async function handleClick() {
    console.log(nodes)
    const updatedNodes = await updateNode(id, nodes, edges)
  }

  useEffect(() => {
    if (JSON.stringify(initialNodes) !== JSON.stringify(nodes)) {
      setDisabled(false)
    }
  }, [initialNodes, nodes])

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            title: nodeTitle,
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

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  )

  return (
    <>
      <button
        disabled={disabled}
        onClick={handleClick}
        className="btn  btn-wide btn-accent"
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
        onConnect={onConnect}
      >
        <div className="absolute text-center right-3 top-3 z-10 text-base text-black  flex flex-col space-y-4 items-start">
          <Paragraph className="text-white">Edit node</Paragraph>
          <input
            placeholder="Title"
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={nodeTitle}
            onChange={(evt) => setNodeTitle(evt.target.value)}
          />
          <input
            placeholder="Subtitle"
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={nodeSubtitle}
            onChange={(evt) => setNodeSubtitle(evt.target.value)}
          />
        </div>
        <Background color="#d6d4d4" gap={16} />
      </ReactFlow>
    </>
  )
}

export default InteractiveFlow
