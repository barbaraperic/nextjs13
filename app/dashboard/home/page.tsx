import EntryCard from '@/components/EntryCard'

export default async function FlashcardPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="m-auto">
      <EntryCard />
    </div>
  )
}
