'use server'

import { revalidateTag } from 'next/cache'

export default async function revalidateDashboard() {
  revalidateTag('/dashboard/collection')
}
