const createURL = (path: string) => window.location.origin + path

export const newEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/entry'), {
      method: 'POST',
      body: JSON.stringify({ content: 'new entry' }),
    })
  )

  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}

export const deleteEntry = async (id: string) => {
  const res = await fetch(
    new Request(createURL(`/api/entry/${id}`), {
      method: 'DELETE',
    })
  )
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}

export const updateEntry = async (id: string, updates: string) => {
  const res = await fetch(
    new Request(createURL(`/api/entry/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ updates }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Something went wrong')
  }
}

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

export const createNode = async (
  id: string,
  title: string,
  subtitle: string
) => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap/${id}`), {
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

export const updateNode = async (id: string, nodeList, nodeEdgeList) => {
  const res = await fetch(
    new Request(createURL(`/api/mindmap/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ nodeList, nodeEdgeList }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Something went wrong')
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
