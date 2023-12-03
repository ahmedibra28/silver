// import { getCategories } from '@/data'
import Link from 'next/link'
import Category from '@/components/Category'
import BlurImage from '@/components/BlurImage'

export default async function Home() {
  const slugGenerator = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
  }
  // const logo = 'https://silver-restaurant.vercel.app/logo.png'

  const images = [
    {
      label: 'BREAKFAST',
      img: 'https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'SIDES',
      img: 'https://plus.unsplash.com/premium_photo-1668031802460-89952ecb00f7?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'SOUPS',
      img: 'https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'SALADS',
      img: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&q=80&w=1978&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'QUICK BITS AND SAVORY SNACKS',
      img: 'https://images.unsplash.com/photo-1695606452994-744d28349d71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'ARABIC CUISINE',
      img: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&q=80&w=2077&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'I LOVE PASTA',
      img: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&q=80&w=2016&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'LUNCH AND DINNER HOUSE SPECIALITIES',
      img: 'https://images.unsplash.com/photo-1533193773788-92826ee86674?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'BURGERS AND SANDWICHES',
      img: 'https://images.unsplash.com/photo-1521845455419-eac340fdbbed?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'PIZZA MENU',
      img: 'https://images.unsplash.com/photo-1624340209361-bfad6e30dbf4?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'INDIAN CUISINE',
      img: 'https://plus.unsplash.com/premium_photo-1669150852127-2435412047f2?auto=format&fit=crop&q=80&w=2017&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      label: 'PASTRIES CAKES AND DESSERTS',
      img: 'https://plus.unsplash.com/premium_photo-1681826495246-aac523b9461f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

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

      <div className='flex flex-wrap justify-center items-centers gap-y-5'>
        {images.map((category, i: number) => (
          <div key={i} className='w-[48%] md:w-[30%] lg:w-[19%] mx-auto'>
            <Link
              href={`/silver-star-restaurant/items#${slugGenerator(
                category.label,
              )}`}
            >
              <Category category={category} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
