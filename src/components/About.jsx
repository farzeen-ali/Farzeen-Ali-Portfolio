import React from 'react';

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-sm text-gray-500 sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-8 leading-relaxed'>
        Hello! I'm your dedicated Developer on a mission to craft top-notch web and cross-platform mobile apps for Android & iOS. Proficient in React JS, React Native, Firebase, and more, I bring simplicity and innovation to every project. As the face of The Techzeen, my YouTube channel, I offer clear programming tutorials in Urdu and Hindi. Let's build and learn together in the digital realm!
        </p>
      </div>
    </div>
  );
}

export default About;