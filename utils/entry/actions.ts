'use server'

import { revalidateTag } from 'next/cache'

export async function deleteEntry(id) {
  await fetch(`${process.env.URL}/api/entry/${id}`, { method: 'DELETE' })
  revalidateTag('getAllEntries')
}

export async function getAllEntries() {
  await fetch(`${process.env.URL}/api/entry`, {
    next: { revalidate: 3600, tags: ['getAllEntries'] },
  })
}
