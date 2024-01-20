import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleLinkClick = () => {
    setNav(false);
  };

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed z-50'>
      <div className=''>
        <h1 className='text-5xl font-signature ml-2 text-red-600'>Farzeen</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white'
          >
            <Link to={link} smooth duration={500} onClick={handleLinkClick}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className='md:hidden cursor-pointer pr-4 z-10 text-gray-500 '
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-2 text-4xl hover:scale-105 hover:text-white duration-200'
            >
              <Link to={link} smooth duration={500} onClick={handleLinkClick}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
