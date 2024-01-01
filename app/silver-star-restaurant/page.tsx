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
      label: 'BREAKFAST',
      img: imageUrl('283A9844.JPG'),
    },
    {
      label: 'SOMALI BREAKFAST',
      img: imageUrl('283A2085.JPG'),
    },
    {
      label: 'SIDES',
      img: imageUrl('salsa2.jpg'),
    },
    {
      label: 'SOUPS',
      img: imageUrl('283A2093.JPG'),
    },
    {
      label: 'SALADS',
      img: imageUrl('1I6A9858.JPG'),
    },
    {
      label: 'QUICK BITS AND SAVORY SNACKS',
      img: imageUrl('283A2065.JPG'),
    },
    {
      label: 'I LOVE PASTA',
      img: imageUrl('1I6A9846.JPG'),
    },
    {
      label: 'LUNCH AND DINNER HOUSE SPECIALITIES',
      img: imageUrl('1I6A9839.JPG'),
    },
    {
      label: 'BURGERS AND SANDWICHES',
      img: imageUrl('283A2147.JPG'),
    },
    {
      label: 'PIZZA MENU',
      img: imageUrl('283A2176.JPG'),
    },
    {
      label: 'PASTRIES CAKES AND DESSERTS',
      img: imageUrl('1I6A3013.JPG'),
    },
    {
      label: 'MILK SHAKE',
      img: imageUrl('283A2759.JPG'),
    },
    {
      label: 'LEMONADE',
      img: imageUrl('283A2792.JPG'),
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
      label: 'MOJITO',
      img: imageUrl('283A2858.JPG'),
    },
    {
      label: 'ICE TEA',
      img: imageUrl('283A2886.JPG'),
    },
    {
      label: 'HOT COFFEE',
      img: imageUrl('283A2892.JPG'),
    },
    {
      label: 'INDIAN CUISINE',
      img: imageUrl('Copy of DSC09435.JPG'),
    },
    {
      label: 'ARABIC CUISINE',
      img: imageUrl('Copy of DSC09526.JPG'),
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
              href={`/silver-star-restaurant/${slugGenerator(category.label)}`}
            >
              <Category category={category} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
