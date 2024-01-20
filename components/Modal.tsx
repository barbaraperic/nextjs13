'use client'
import { useEffect } from 'react'
import { Heading3 } from './texts/texts'
import { FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const Modal = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  const router = useRouter()

  function handleDismiss() {
    router.replace('/collection')
  }

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleDismiss()
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 bg-black transition-opacity opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full transition-transform">
        <div className="absolute flex flex-col justify-between items-center top-0 left-0 right-0 bottom-0 w-4/5 h-2/3 m-auto bg-white p-6 pointer-events-auto">
          <button
            onClick={handleDismiss}
            className="absolute top-14 right-4 -translate-y-full grid place-content-center w-10 h-10"
          >
            <FiX className="w-6 h-6" />
          </button>
          <Heading3 className="mt-6">{title}</Heading3>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
