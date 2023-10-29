import BlurImage from '@/components/BlurImage'
import React from 'react'

interface ItemProp {
  category: string
  item: string
  price: number
  image?: string
  size?: string
  description?: string
}
const Item = ({ item }: { item: ItemProp }) => {
  const hasInNumber = item?.size && /\d/.test(item?.size)

  const newPriceFormat = hasInNumber
    ? item?.size?.split(' ')?.map((item) => {
        const s = item?.split('-')[0]
        const p = item?.split('-')[1]
        const f = `${s} - $${parseInt(p).toFixed(2)}`
        return f
      })
    : item?.price || 0

  const noImageAvailable =
    'https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg'
  return (
    <div className='card shadow-xl mx-auto bg-white text-gray-700 flex flex-row justify-between items-center rounded-xl'>
      <figure className='w-[35%] bg-red-200s rounded-xl rounded-tr-none rounded-br-none'>
        <BlurImage
          src={item?.image || noImageAvailable}
          alt={item.item}
          width={500}
          height={500}
          className='rounded-xl w-36 h-36 md:w-44 md:h-44 object-cover p-2'
        />
      </figure>
      <div className='card-body py-2 px-1.5 w-[55%]'>
        <h3 className='font-bold text-my-primary'>{item.item}</h3>
        <p className='font-bold text-sm'>
          {typeof newPriceFormat === 'number'
            ? `$${newPriceFormat}`
            : newPriceFormat?.map((item) => <span key={item}> {item} </span>)}
        </p>
        <p className='text-xs'>{item?.description}</p>
      </div>
    </div>
  )
}

export default Item
