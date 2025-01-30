"use client"

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[calc(100vh-90px)] gap-3 md:gap-5' id='home'>
      <Image
        src='/images/avatar.png'
        alt='avatar'
        width={150}
        height={150}
        className='border-2 border-shark-950 rounded-full md:w-[200px]'
      />
      <div className='flex flex-col gap-2 text-center md:gap-3'>
        <p className='text-4xl font-bold md:text-5xl'>Christal Sofia</p>
        <p>Front-end Web Developer</p>
      </div>
      <CustomButton
        title='Résumé'
        containerStyles='text-shark-950 border-2 border-shark-950 rounded-lg hover:bg-shark-950 hover:text-white text-sm px-6 py-2 md:text-base'
        handleClick={() => {window.open('https://docs.google.com/document/d/1n58mQ56GMjpe94E7Mk7U2UDM-HYFsL4uF0QlYyZz3TI/', '_blank')}}
      />
    </div>
  )
}

export default Hero