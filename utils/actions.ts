'use server'

import { revalidatePath } from 'next/cache'

export const update = (paths = [] as string[]) =>
  paths.forEach((p) => revalidatePath(p))
