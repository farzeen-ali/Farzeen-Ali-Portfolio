import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_96na0mq', 'template_f7syeqs', formRef.current, 'YgDYGuvifAkhkWEWA')
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6 text-gray-500'>Ready to turn ideas into reality? Drop me a message by filling out the form below. Excited to embark on the journey of innovation with you!</p>
        </div>

        <div className='flex justify-center items-center'>
          <form ref={formRef} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input
              type='text'
              placeholder='Your Name'
              pattern='[^\s]+'
              title='Please enter a valid message (no empty white spaces)'
              required
              name='name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              required
              name='email'
            />
            <textarea
              rows={8}
              placeholder='Your Message'
              pattern='[^\s]+'
              title='Please enter a valid message (no empty white spaces)'
              name='message'
              className='resize-none p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              required
            />
            <button className='text-white bg-gradient-to-b from-red-500 to-red-700 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:from-red-700 hover:to-red-500 hover:scale-110 duration-300'>
              Send
            </button>
            {error && <p className='text-red-500'>Error sending message. Please try again later.</p>}
            {success && <p className='text-green-500'>Thanks! Your message has been sent successfully.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
