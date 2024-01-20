import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';

function Portfolio() {
  const portfolio = [
    {
      id: 1,
      src: react,
      link: 'https://www.youtube.com/playlist?list=PL5OhSdfH4uDsc4EOVS27Sk1_eK5KzvFTf',
      code: 'https://github.com/farzeen-ali/Complete-React-JS-Course-From-Basic-To-Advance',
    },
    {
      id: 2,
      src: javascript,
      link: 'https://www.youtube.com/playlist?list=PL5OhSdfH4uDt9MD6CeV0Cf8bRk7gVXUSe',
      code: 'https://github.com/farzeen-ali/JavaScript-Tutorial-Basic-To-Mastery',
    },
    {
      id: 3,
      src: css,
      link: 'https://www.youtube.com/playlist?list=PL5OhSdfH4uDt9Tc6MFDeo41-YTkqmCcFQ',
      code: 'https://github.com/farzeen-ali/CSS-Tutorial-From-ZeroToHero',
    },
    {
      id: 4,
      src: html,
      link: 'https://www.youtube.com/playlist?list=PL5OhSdfH4uDtswBFMNThBGIFPT4LKauBL',
      code: 'https://github.com/farzeen-ali/HTML_Tutorial-TechZeen',
    },
  ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='py-4'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='pt-5 text-gray-500 text-base sm:text-lg'>Discover my top playlists on cutting-edge technologies like React JS and JavaScript. Elevate your coding skills with just a click!</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-4'>
          {portfolio.map(({ id, src, link, code }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg mb-4 md:mb-0'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 w-full h-auto'></img>
              <div className='flex items-center justify-center flex-col sm:flex-row'>
                <button className='w-full rounded-md bg-gray-500 sm:w-1/2 px-4 py-2 m-2 cursor-pointer hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-400 duration-300'>
                  <a href={link} target='_blank' rel='noreferrer'>
                    View Playlist
                  </a>
                </button>
                <button className='w-full rounded-md bg-gradient-to-r from-red-500 to-red-700 cursor-pointer sm:w-1/2 px-4 py-2 m-2 hover:from-red-700 hover:to-red-500 duration-200'>
                  <a href={code} target='_blank' rel='noreferrer'>
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;