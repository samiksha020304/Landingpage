
import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';

const Main = () => {
  const [isCreationOpen, setIsCreationOpen] = useState(false);

  const openCreation = () => {
    setIsCreationOpen(!isCreationOpen);
  };

  return (
    <div>
      <div className='flex justify-center'>
        <h1 className='lg:text-5xl md:text-3xl font-meow mt-5 text-yellow-500'>DESIGN YOUR OWN WORLD</h1>
      </div>

      <div className='flex flex-col md:flex-row pt-4'>
        <div className='flex w-full md:w-[80%] h-[13%] md:ml-40'>
          <form className='flex border w-full rounded-md shadow-sm'>
            <input
              className='w-full px-4 py-1 font-meow rounded-l-lg focus:outline-none focus:ring focus:border-blue-300'
              type='text'
              placeholder='SEARCH...'
            />
            <button
              className='px-4 py-1 text-white font-meow rounded-r-lg hover:bg-gray-500 focus:outline-none focus:ring focus:border-blue-300'
              type='submit'
            >
              SEARCH
            </button>
          </form>
        </div>

        <div className='flex w-full mt-4 md:w-[40%] md:h-[12%] md:ml-7'>
          <form className='flex border rounded-md shadow-sm'>
            <button
              id='myText'
              className='hover:text-gray-500 flex cursor-pointer px-4 py-1 font-meow mx-auto'
              onClick={openCreation}
            >
              EXPLORE<FiAlignJustify className='md:mt-1 lg:mt-1 ml-7 mx-auto' />
            </button>
          </form>
          {isCreationOpen && (
            <div className='shadow-2xl bg-white mt-2 md:mt-16 mx-5 fixed md:relative overflow-y-scroll p-10 w-full md:w-[17%] h-[45%] md:h-auto grid grid-cols-1 md:grid-cols-3'>
              {/* Content inside the expanded div */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
