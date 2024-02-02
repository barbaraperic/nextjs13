export const formatNodeObject = (nodeList, id) => {
  return nodeList.map((node) => {
    return {
      title: node.data.title,
      subtitle: node.data.subtitle,
      positionX: node.position.x,
      positionY: node.position.y,
      id: node.id,
      nodeListId: id,
    }
  })
}
