import React from 'react'
import BlurImage from './BlurImage'

const Category = ({
  category,
}: {
  category: { label: string; img: string }
}) => {
  // const img =
  //   'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className='card shadow-xl mx-auto bg-white text-my-primary'>
      <figure>
        <BlurImage
          src={category.img}
          alt={'logo'}
          width={500}
          height={500}
          className='rounded-xl w-44 h-44 object-cover'
        />
      </figure>
      <div className='card-body items-center text-center py-3 px-2'>
        <h3 className='text-sm  md:text-md uppercase font-bold leading-nones'>
          {category.label}
        </h3>
      </div>
    </div>
  )
}

export default Category
