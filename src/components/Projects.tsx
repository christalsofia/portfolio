import React from 'react'
import ProjectList from './ProjectList'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 bg-shark-50 p-10 md:p-0 md:h-screen' id='projects'>
      <div>
        <p className='text-3xl font-bold md:text-4xl'>My Projects</p>
      </div>
      <div>
        <ProjectList/>
      </div>
    </div>
  )
}

export default Projects