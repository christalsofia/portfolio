
import React from 'react'
import { GitHub, Linkedin, Mail } from 'react-feather'

const Footer = () => {
  const socialMediaIcons = [
    { icon: GitHub, href: 'https://github.com/christalsofia' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/christalsofia/' },
    { icon: Mail, href: 'mailto:christalsofia.3528@gmail.com' },
  ];

  return (
    <div className='container relative mx-auto px-10 my-5 flex flex-col-reverse h-[10vh] gap-2 justify-center items-center md:flex-row md:justify-between md:gap-0' id='contact'>
      <div>
        <p className='text-xs md:text-sm'>&copy; {new Date().getFullYear()} Christal Sofia. All rights reserved.</p>
      </div>
      <div className='border border-transparent flex text-shark-950 md:gap-2'>
        {socialMediaIcons.map(({ icon: Icon, href }) => (
          <div key={href} className='hover:bg-shark-950 hover:text-white hover:duration-300 p-2 rounded-full'>
            <a href={href} target='_blank'>
              <Icon size={20}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer