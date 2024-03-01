import { useEffect, useLayoutEffect } from 'react'

// Solves both SSR and CSR switching context issues
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
