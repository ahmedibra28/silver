import Link from 'next/link'
import BlurImage from '@/components/BlurImage'

export default async function Home() {
  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <BlurImage
        src={'/logo.png'}
        alt={'logo'}
        width={500}
        height={500}
        className='text-center mx-auto w-72 md:w-96 object-contain'
      />

      <div className='divider divider-secondary text-my-primary text-3xl font-bold my-10'>
        OUR MENU
      </div>

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-centers gap-y-5'>
        <div className='btn btn-lg w-full md:w-[40%] lg:w-[30%] mx-auto h-40 bg-my-primary flex items-center justify-center text-white font-bold uppercase rounded-xl p-4'>
          <Link href='/silver-star-restaurant'>Silver Star Restaurant</Link>
        </div>
        <div className='btn btn-lg w-full md:w-[40%] lg:w-[30%] mx-auto h-40 bg-my-primary flex items-center justify-center text-white font-bold uppercase rounded-xl p-4'>
          <Link href='/juba-mall-silver-coffee'>Juba mall silver coffee</Link>
        </div>
      </div>
    </main>
  )
}
