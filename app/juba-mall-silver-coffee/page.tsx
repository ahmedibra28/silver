import Link from 'next/link'
import Category from '@/components/Category'
import BlurImage from '@/components/BlurImage'

export default async function Home() {
  const slugGenerator = (text: string) => {
    return text.toLowerCase().split(' ').join('-')
  }

  const imageUrl = (image: string) =>
    `https://farshaxan.blr1.cdn.digitaloceanspaces.com/silver/${image}`
  const images = [
    {
      label: 'PASTRIES CAKES AND DESSERTS',
      img: imageUrl('1I6A3013.JPG'),
    },
    {
      label: 'SMOOTHIE',
      img: imageUrl('283A2813.JPG'),
    },
    {
      label: 'FRAPPE',
      img: imageUrl('283A2851.JPG'),
    },
    {
      label: 'ICE TEA',
      img: imageUrl('283A2886.JPG'),
    },
    {
      label: 'MOJITO',
      img: imageUrl('283A2858.JPG'),
    },
    {
      label: 'MILK SHAKE',
      img: imageUrl('283A2759.JPG'),
    },
    {
      label: 'HOT COFFEE',
      img: imageUrl('283A2892.JPG'),
    },
    {
      label: 'LEMONADE',
      img: imageUrl('283A2792.JPG'),
    },
    {
      label: 'ICED LATTES',
      img: imageUrl('1I6A3069.JPG'),
    },
  ]

  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <div className='bg-white w-full md:w-[504px] mx-auto rounded py-2'>
        <BlurImage
          src={'/coffee-logo.png'}
          alt={'logo'}
          width={500}
          height={500}
          className='text-center mx-auto w-72 md:w-96 object-contain'
        />
      </div>

      <div className='divider divider-secondary text-my-primary text-3xl font-bold my-10'>
        OUR MENU
      </div>

      <div className='flex flex-wrap justify-center items-centers gap-y-5'>
        {images.map((category, i: number) => (
          <div key={i} className='w-[48%] md:w-[30%] lg:w-[19%] mx-auto'>
            <Link
              // href={`/juba-mall-silver-coffee/items#${slugGenerator(
              //   category.label,
              // )}`}
              href={`/juba-mall-silver-coffee/${slugGenerator(category.label)}`}
            >
              <Category category={category} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
