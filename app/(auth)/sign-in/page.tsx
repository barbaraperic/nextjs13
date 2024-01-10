import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import SignInButton from './SignInButton'
import { Heading2, Paragraph } from '@/app/components/texts/texts'

const SignInPage = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="flex text-left bg-neutral text-base-100 justify-center flex-col items-center">
        <Heading2 className="text-7xl">tartaruga</Heading2>
        <Paragraph>sign in</Paragraph>
      </div>
      <div className="flex justify-center items-center ">
        <SignInButton />
      </div>
    </div>
  )
}

export default SignInPage
