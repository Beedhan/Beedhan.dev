import React from 'react'
import Sectioncontainer from '../sectioncontainer'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <Sectioncontainer title='Blogs'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </Sectioncontainer>
  )
}

export default Blogs