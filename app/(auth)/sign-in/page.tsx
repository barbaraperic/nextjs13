import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import SignInButton from '@/components/SignInButton'

const SignInPage = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard/home')
  }

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="flex text-left bg-neutral text-base-100 justify-center flex-col items-center">
        <h2 className="text-7xl">tartaruga</h2>
        <p>sign in</p>
      </div>
      <div className="flex justify-center items-center ">
        <SignInButton />
      </div>
    </div>
  )
}

export default SignInPage
