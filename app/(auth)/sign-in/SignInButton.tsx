'use client'
import { signIn } from 'next-auth/react'

const SignInButton = () => {
  return (
    <button
      className="btn btn-wide text-lg"
      onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
    >
      Sign in with GitHub
    </button>
  )
}

export default SignInButton
