import React from 'react';

import reactJS from '../assets/re.png';
import js from '../assets/jss.png';
import laravel from '../assets/laravel.png';
import tailwind from '../assets/tail.png';
import nodejs from '../assets/nodejs.png';
import github from '../assets/githu.png';
import mongo from '../assets/mongo.png';
import firebase from '../assets/firebase.png';

function Experience() {
  const skill = [
    {
      id: 1,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-600',
    },
    {
      id: 2,
      src: reactJS,
      title: 'React',
      style: 'shadow-blue-400',
    },
    {
      id: 3,
      src: laravel,
      title: 'Laravel',
      style: 'shadow-red-700',
    },
    {
      id: 4,
      src: github,
      title: 'Github',
      style: 'shadow-white',
    },
    {
      id: 5,
      src: mongo,
      title: 'Mongo Db',
      style: 'shadow-green-700',
    },
    {
      id: 6,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-yellow-700',
    },
    {
      id: 7,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 8,
      src: nodejs,
      title: 'Node JS',
      style: 'shadow-green-600',
    },
  ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-full text-white'>
        <div className='mt-6'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold border-b-4 border-gray-500 p-2 inline mb-4'>Experience</p>
          <p className='py-6 sm:pt-8 text-gray-500'>Hands-on experience with various technologies</p>
        </div>
        <div className='w-full cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 text-center py-4 sm:py-8 px-4 sm:px-8'>
          {skill.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img className='w-20 mx-auto' src={src} alt='skills'></img>
              <p className='mt-4 text-sm sm:text-base'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
