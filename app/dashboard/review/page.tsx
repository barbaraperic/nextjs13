import { getUserId } from '@/utils/auth'
import ReviewChecklist from '@/components/ReviewChecklist'
import { prisma } from '@/utils/db'

const getRandomEntry = async () => {
  const user = await getUserId()
  const totalEntries = await prisma.entry.count({
    where: {
      userId: user.id,
    },
  })

  const randomIndex = Math.floor(Math.random() * totalEntries)

  const randomItem = await prisma.entry.findFirst({
    skip: randomIndex,
  })

  return randomItem
}

const ReviewPage = async () => {
  const randomItem = await getRandomEntry()

  return (
    <>
      <div className="flex justify-start pl-10 mt-2 items-center">
        <ReviewChecklist
          questions={[
            'Sobre o que é este artigo?',
            'Anota palavras desconhecidas',
            'Adiciona 1-2 frases',
          ]}
        />
      </div>
      <div className="flex w-full p-10 h-[80%]">
        <div className="grid flex-grow w-1/2 card bg-base-300 rounded-box  text-neutral whitespace-pre-line h-full p-5">
          {randomItem?.content}
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid  flex-grow w-1/2 p-5 text-neutral card bg-base-100 rounded-box h-full">
          <textarea className="w-full text-lg outline-none h-full rounded-box bg-base-100 " />
        </div>
      </div>
    </>
  )
}

export default ReviewPage
