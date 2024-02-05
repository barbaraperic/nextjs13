const createURL = (path: string) => window.location.origin + path

export const createMindMap = async () => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap`), {
      method: 'POST',
    })
  )
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}

export const deleteMindMap = async (id: string) => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap/${id}`), {
      method: 'DELETE',
    }),
    { cache: 'no-store' }
  )
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}

export const createNode = async (
  id: string,
  title: string,
  subtitle: string
) => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap/${id}/node`), {
      method: 'POST',
      body: JSON.stringify({ id, title, subtitle }),
    }),
    { cache: 'no-store' }
  )
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}

export const updateNode = async (id: string, nodeList) => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap/${id}/node`), {
      method: 'PATCH',
      body: JSON.stringify({ nodeList }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Something went wrong')
  }
}

export const createNodeEdge = async (
  id: string,
  target: string,
  source: string
) => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap/${id}/edge`), {
      method: 'POST',
      body: JSON.stringify({ id, target, source }),
    })
  )
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}

export const updateNodeEdge = async (id: string, nodeEdgeList) => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap/${id}/edge`), {
      method: 'PATCH',
      body: JSON.stringify({ nodeEdgeList }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Something went wrong')
  }
}
