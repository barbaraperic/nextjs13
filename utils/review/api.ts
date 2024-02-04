const createURL = (path: string) => window.location.origin + path

export const createReview = async (content) => {
  const res = await fetch(
    new Request(createURL(`/api/review`), {
      method: 'POST',
      body: JSON.stringify({ content }),
    })
  )
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong on the API server')
  }
}
