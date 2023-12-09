// import Link from 'next/link'
// import BlurImage from '@/components/BlurImage'

import { redirect } from 'next/navigation'

export default async function Home() {
  // redirect to silver star restaurant

  return redirect('/silver-star-restaurant')

  // return (
  //   <main className='max-w-6xl mx-auto py-5 px-2 md:p-5 flex justify-center items-center h-screen flex-col gap-y-10'>
  //     <div className='divider divider-secondary text-my-primary text-3xl font-bold my-10'>
  //       OUR MENU
  //     </div>

  //     <div className='flex flex-col md:flex-row flex-wrap justify-center items-centers gap-5 w-full'>
  //       <Link
  //         href='/silver-star-restaurant'
  //         className='card card-side bg-base-100 shadow-xl'
  //       >
  //         <figure>
  //           <BlurImage
  //             src={'/logo.png'}
  //             alt={'logo'}
  //             width={500}
  //             height={500}
  //             className='rounded-xl w-28 h-28 md:w-44 md:h-44 object-contain p-2'
  //           />
  //         </figure>
  //         <div className='card-body bg-my-primary text-white rounded-r-xl'>
  //           <h2 className='text-sm md:text-lg my-auto'>
  //             {' '}
  //             Silver Star Restaurant
  //           </h2>
  //         </div>
  //       </Link>

  //       {/* <Link
  //         href='/juba-mall-silver-coffee'
  //         className='card card-side bg-base-100 shadow-xl'
  //       >
  //         <figure>
  //           <BlurImage
  //             src={'/coffee-logo.png'}
  //             alt={'logo'}
  //             width={500}
  //             height={500}
  //             className='rounded-xl w-28 h-28 md:w-44 md:h-44 object-contain p-2'
  //           />
  //         </figure>
  //         <div className='card-body bg-my-primary text-white rounded-r-xl'>
  //           <h2 className='text-sm md:text-lg my-auto'>
  //             Juba mall silver coffee
  //           </h2>
  //         </div>
  //       </Link> */}
  //     </div>
  //   </main>
  // )
}
