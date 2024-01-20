import React from 'react';
import Hero from '../assets/me2.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" name="home">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            I'm a FullStack Developer
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto md:mx-0 text-sm md:text-base lg:text-lg xl:text-xl">
          I'm a passionate software developer, crafting sleek Web and Mobile Apps with expertise in React JS, React Native, and more. As the creator of The Techzeen, my YouTube channel offers concise programming tutorials in Urdu/Hindi. Let's transform your ideas into digital brilliance!
          </p>
          <div className="text-center md:text-left">
            <Link to='portfolio' smooth duration={500} className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 cursor-pointer w-32 md:mx-0 mx-auto">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            className="rounded-2xl mx-auto w-full md:w-4/5 lg:w-2/3"
            src={Hero}
            srcSet={`${Hero} 1024w, ${Hero} 800w, ${Hero} 500w`}
            sizes="(max-width: 600px) 90vw, (max-width: 1024px) 70vw, 50vw"
            alt="Farzeen Ali"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
