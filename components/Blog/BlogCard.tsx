import React from 'react'

const BlogCard = () => {
  return (
    <div className='p-4 bg-primary my-2 rounded transition-all cursor-pointer w-full'>
        <h2 className='font-semibold text-2xl'>Blog Title</h2>
        <div className='flex justify-between'>
            <p className='font-Roboto-Slab text-text-secondary'>Subtitle</p>
            <p className='font-Roboto-Slab text-text-secondary'>Nov 10,2024</p>
        </div>
    </div>
  )
}

export default BlogCard