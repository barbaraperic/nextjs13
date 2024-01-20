const createURL = (path: string) => {
  return window.location.origin + path
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
