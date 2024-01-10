import { getAllCollections } from '@/utils/actions'
import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import FlashcardList from './flashcard-list'

export default async function Dashboard() {
  // const collection = await getAllCollections();

  const today = dayjs().format('YYYY-MM-DD')

  // const todaysFlashcards = collection.data.filter(
  // 	(f) => f.nextReview === today || f.nextReview === ""
  // );

  return (
    <main className="flex flex-1 h-full flex-col">
      <section className="relative mb-6 rounded-lg space-y-10 flex-1 flex justify-center items-center">
        <div className="min-w-3xl">
          {/* <FlashcardList flashcards={collection.data}></FlashcardList> */}
        </div>
      </section>
    </main>
  )
}
