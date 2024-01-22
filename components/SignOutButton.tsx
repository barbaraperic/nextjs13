'use client'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <button className="text-lg" onClick={() => signOut()}>
      Sign out
    </button>
  )
}

export default SignOutButton
