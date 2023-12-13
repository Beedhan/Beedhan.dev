import Nav from '@/components/Nav/nav';
import React from 'react'

const MainLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <div>
        <Nav/>
        <div className='w-[75%] mx-auto'>
        {children}
        </div>
    </div>
  )
}

export default MainLayout