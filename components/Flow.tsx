'use client'

import React, { useCallback, useEffect, useState, useTransition } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'
import CustomNode from './CustomNode'
import { Paragraph } from './texts/texts'
import { updateNode, updateNodeEdge } from '@/utils/mindmap/api'
import { useRouter } from 'next/navigation'

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
  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  function onNodeClick(event, node) {
    setNodeId(node.id)
  }

  async function handleClick() {
    const updatedNodes = await updateNode(id, nodes)
    const updatedEdges = await updateNodeEdge(id, edges)
    router.refresh()
  }

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

  useEffect(() => {}, [edges])

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  )

  return (
    <div className="h-[90%]">
      <button
        onClick={() => startTransition(() => handleClick())}
        disabled={isPending}
        className="btn btn-wide bg-secondary-light mb-6 disabled:text-primary-dark disabled:border-2 disabled:border-primary-dark"
      >
        {isPending && <>Saving...</>}
        {!isPending && <>Save</>}
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
        className=""
      >
        <div className="absolute text-center right-3 top-3 z-10 text-base text-black  flex flex-col space-y-4 items-start">
          <Paragraph className="text-white">Edit node</Paragraph>
          <input
            placeholder="Title"
            type="text"
            className="input input-bordered input-accent  w-full max-w-xs"
            value={nodeTitle}
            onChange={(evt) => setNodeTitle(evt.target.value)}
          />
          <input
            placeholder="Subtitle"
            type="text"
            className="input input-bordered input-accent w-full max-w-xs"
            value={nodeSubtitle}
            onChange={(evt) => setNodeSubtitle(evt.target.value)}
          />
        </div>
        <Background color="#d6d4d4" gap={16} />
      </ReactFlow>
    </div>
  )
}

export default InteractiveFlow
