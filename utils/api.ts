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
    new Request(createURL(`/api/node`), {
      method: 'POST',
      body: JSON.stringify({ name: 'Init' }),
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
  name: string,
  speechPart: string
) => {
  const res = await fetch(
    new Request(createURL(`/api/node/${id}`), {
      method: 'POST',
      body: JSON.stringify({ id, name, speechPart }),
    })
  )
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}
