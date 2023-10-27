'use client'

import Item from '@/components/Item'
import { getItemsByCategory } from '@/data'
import { useParams } from 'next/navigation'

export default function Category() {
  const params = useParams()
  const { slug } = params as { slug: string }

  const reverseSlugGenerator = (text: string) => {
    return text.split('-').join(' ')
  }
  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <div className='flex flex-wrap gap-y-5 mt-5 md:mt-5'>
        {getItemsByCategory(reverseSlugGenerator(slug)).map(
          (category, i: number) => (
            <div key={i} className='w-[95%] md:w-[48%] mx-auto'>
              <Item item={category} />
            </div>
          )
        )}
      </div>
    </main>
  )
}
