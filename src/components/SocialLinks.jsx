import React from 'react'
import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
function SocialLinks() {

  const links = [
    {
      id: 1,
      child: (
        <>
          YouTube <FaYoutube size={30} /> 
        </>
      ),
      href: 'https://www.youtube.com/@TheTechzeen',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} /> 
        </>
      ),
      href: 'https://www.linkedin.com/in/farzeen-ali-533479204'
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={30} /> 
        </>
      ),
      href: 'https://github.com/farzeen-ali'
    },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} /> 
        </>
      ),
      href: 'mailto:farzeenaliarif786@gmail.com',
      style: 'rounded-br-md'
    }
  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <>
            <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500 ${style}` }>
            <a className='flex justify-between items-center w-full text-white' href={href} download={download} target='_blank' rel='noreferrer'> 
              {child}
            </a>
          </li>
          </>
        ))}
        
      </ul>
    </div>
  )
}

export default SocialLinks
