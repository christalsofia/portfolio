"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { ExternalLink } from 'react-feather'

const ProjectList = () => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'A collection of my projects, showcasing my skills and experience.',
      tags: ['Next.js', 'TailwindCSS', 'TypeScript'],
      image: '/images/portfolio.png',
      alt: 'Portfolio Preview',
      link: 'https://christalsofia.vercel.app',
    },
    {
      title: 'PlantGuard',
      description: 'A plant leaf disease recognition system that harnesses the power of Convolutional Neural Network (CNN) algorithm to detect plant conditions.',
      tags: ['Flask', 'HTML', 'JavaScript', 'TailwindCSS'],
      image: '/images/plantguard.png',
      alt: 'PlantGuard Preview',
      link: 'https://github.com/christalsofia/project-plantguard',
    },
  ]

  return (
    <div className='grid grid-cols-1 gap-5 container relative mx-auto md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className='border rounded-xl overflow-hidden bg-white flex flex-col'>
          <Image
            src={project.image}
            alt={project.alt}
            width={350}
            height={0}
            className='w-full h-auto'
          />
          <div className='flex flex-col gap-3 p-5 flex-grow'>
            <div className='flex-grow'>
              <p className='text-xl font-semibold mb-2 md:text-2xl'>{project.title}</p>
              <p className='text-xs text-shark-500 md:text-sm'>{project.description}</p>
            </div>
            <div className='grid grid-cols-2 gap-1 text-xs font-normal text-center text-white md:grid-cols-3 md:text-sm'>
              {project.tags.map((tag, tagIndex) => (
                <div key={tagIndex} className='border border-shark-950 bg-shark-950 rounded-full'>
                  {tag}
                </div>
              ))}            
            </div>
            <CustomButton
              icon={<ExternalLink size={20}/>}
              containerStyles='flex justify-center gap-2 items-center border-2 rounded-lg p-1 bg-shark-950 text-white mt-auto hover:bg-white hover:text-shark-950 border-shark-950 text-sm md:text-base md:p-2'
              handleClick={() => {window.open(project.link, '_blank')}}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectList