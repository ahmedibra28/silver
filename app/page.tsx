import Image from 'next/image'
import { getCategories } from '@/data'
import Link from 'next/link'
import Category from '@/components/Category'

export default async function Home() {
  const slugGenerator = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
  }

  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <Image
        src='/logo-text.png'
        alt='logo'
        width={405}
        height={256}
        className='text-center mx-auto w-72 md:w-96'
        quality={100}
      />

      <div className='divider divider-secondary text-secondary text-3xl font-bold my-10'>
        OUR MENU
      </div>

      <div className='flex flex-wrap justify-center items-centers gap-y-5'>
        {Array.from(new Set(getCategories())).map((category, i: number) => (
          <div key={i} className='w-[48%] md:w-[30%] lg:w-[19%] mx-auto'>
            <Link href={`/items#${slugGenerator(category)}`}>
              <Category label={category} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
