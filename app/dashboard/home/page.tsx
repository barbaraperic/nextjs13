import { Paragraph } from '@/components/texts/texts'

const HomePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col space-y-6 p-10 ">
      <Paragraph>How to use Tartaruga</Paragraph>
      <div className="flex flex-col w-full text-black">
        <div className="grid h-40 text-center px-8  card bg-base-300 rounded-box place-items-center">
          <Paragraph>
            🌱 Create entries and mind maps as a reference materials when
            practicing speaking, writing, or listening in your target language
          </Paragraph>
        </div>
        <div className="divider divider-accent"></div>
        <div className="grid text-center px-8 h-40 card bg-base-300 rounded-box place-items-center">
          <Paragraph>
            🎯 Regularly review your notes and mind maps to reinforce your
            learning
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default HomePage
