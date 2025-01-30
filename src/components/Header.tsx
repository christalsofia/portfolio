"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'react-feather';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container relative mx-auto px-10 my-5 flex justify-between items-center'>
      <div>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={50}
          height={50}
        />
      </div>
      <div className='hidden gap-10 md:flex'>
        <a href='#' className='border-b-2 border-transparent hover:border-b-2 hover:border-shark-950 duration-300'>Home</a>
        <a href='#projects' className='border-b-2 border-transparent hover:border-b-2 hover:border-shark-950 duration-300'>Projects</a>
        <a href='#contact' className='border-b-2 border-transparent hover:border-b-2 hover:border-shark-950 duration-300'>Contact</a>
      </div>

      <div className='flex justify-center md:hidden'>
        <Menu onClick={() => setIsOpen(true)} />
      </div>

      <div 
        className={`fixed top-0 right-0 w-1/2 h-full bg-shark-950 p-10 z-10 md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex justify-end pb-2 text-white'>
          <X onClick={() => setIsOpen(false)} />
        </div>
        <a href='#' className='block py-2 text-white'>Home</a>
        <a href='#projects' className='block py-2 text-white'>Projects</a>
        <a href='#contact' className='block py-2 text-white'>Contact</a>
      </div>
    </div>
  )
}

export default Header