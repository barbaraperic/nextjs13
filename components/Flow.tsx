'use client'

import React, { useEffect, useState } from 'react'
import ReactFlow, { useNodesState, useEdgesState, Background } from 'reactflow'
import 'reactflow/dist/style.css'
import CustomNode from './CustomNode'
import { Paragraph } from './texts/texts'
import { useAutosave } from 'react-autosave'
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

  const [nodeName, setNodeName] = useState('')
  const [nodeSpeechPart, setNodeSpeechPart] = useState('')

  console.log(nodes)
  console.log(nodes)

  function onNodeClick(event, node) {
    setNodeId(node.id)
  }

  async function handleClick() {
    const currentNode = nodes.find((node) => node.id === nodeId)
    console.log('>>>>>>>>', currentNode)
    const updated = await updateNode(id, currentNode)
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
            speechPart: nodeSpeechPart,
          }
        }
        return node
      })
    )
  }, [nodeSpeechPart, setNodes])

  // useEffect(() => {
  //   setNodes((nds) =>
  //     nds.map((node) => {
  //       if (node.id === nodeId) {
  //         node.style = { ...node.style, background: nodeBg }
  //       }

  //       return node
  //     })
  //   )
  // }, [nodeBg, setNodes])

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
            value={nodeName}
            onChange={(evt) => setNodeName(evt.target.value)}
          />
          <input
            placeholder="Speech Part"
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={nodeSpeechPart}
            onChange={(evt) => setNodeSpeechPart(evt.target.value)}
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
