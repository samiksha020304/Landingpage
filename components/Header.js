// import React,{useState} from 'react'
// import { FiChevronDown} from 'react-icons/fi'

// const Header = () => {
  
//     const [isCreationOpen, setIsCreationOpen] = useState(false);

//     const openCreation = () => {
//         setIsCreationOpen(!isCreationOpen);
//     };
//     const [isCreationOpen1, setIsCreationOpen1] = useState(false);

//     const openCreation1 = () => {
//         setIsCreationOpen1(!isCreationOpen1);
//     };
//     const [isCreationOpen2, setIsCreationOpen2] = useState(false);

//     const openCreation2 = () => {
//         setIsCreationOpen2(!isCreationOpen2);
//     };
//     const [isCreationOpen3, setIsCreationOpen3] = useState(false);

//     const openCreation3 = () => {
//         setIsCreationOpen3(!isCreationOpen3);
//     };
    
//     return (
//     <div className='h-[15%] w-full bg-white text-black'>
//      <img src ='logo.png' alt='image' className='absolute left-0 h-[14%] w-[7%]'/>
      
//       <div className='flex justify-evenly font-meow text-xl '> 
//                <a href='' className='ml-20 px-5 pt-7 hover:text-gray-500'>MY WORK</a>
//                       <button
//                         id="myText"
//                         className={'hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-5'}
//                         onClick={openCreation}
//                     >
//                         CREATION<FiChevronDown className="md:mt-1 lg:mt-2 " />
//                     </button>
//                     {isCreationOpen && (
//                         <div className="shadow-2xl bg-white mt-16 mx-5 fixed overflow-y-scroll p-10 w-[17%] h-[45%] grid grid-cols-3">
                            
//                                  </div>
//                     )}

// <button
//                         id="myText"
//                         className={'hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-8'}
//                         onClick={openCreation1}
//                     >
//                         USERNAME<FiChevronDown className="md:mt-1 lg:mt-2 " />
//                     </button>
//                     {isCreationOpen1 && (
//                         <div className="shadow-2xl bg-black mt-16 mx-5 fixed overflow-y-scroll p-10 w-[17%] h-[45%] grid grid-cols-3">
                            
//                                  </div>
//                     )}

// <button
//                         id="myText"
//                         className={'hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-8'}
//                         onClick={openCreation2}
//                     >
//                         USERNAME<FiChevronDown className="md:mt-1 lg:mt-2 " />
//                     </button>
//                     {isCreationOpen2 && (
//                         <div className="shadow-2xl bg-black mt-16 mx-5 fixed overflow-y-scroll p-10 w-[17%] h-[45%] grid grid-cols-3">
                            
//                                  </div>
//                     )}

// <button
//                         id="myText"
//                         className={'hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-8'}
//                         onClick={openCreation3}
//                     >
//                         USERNAME<FiChevronDown className="md:mt-1 lg:mt-2 " />
//                     </button>
//                     {isCreationOpen3 && (
//                         <div className="shadow-2xl bg-black mt-16 mx-5 fixed overflow-y-scroll p-10 w-[17%] h-[45%] grid grid-cols-3">
                            
//                                  </div>
//                     )}
    
//     </div>
//     </div>
    
//   )
// }

// export default Header

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isCreationOpen, setIsCreationOpen] = useState(false);
  const [isCreationOpen1, setIsCreationOpen1] = useState(false);
  const [isCreationOpen2, setIsCreationOpen2] = useState(false);
  const [isCreationOpen3, setIsCreationOpen3] = useState(false);

  const openCreation = () => {
    setIsCreationOpen(!isCreationOpen);
  };

  const openCreation1 = () => {
    setIsCreationOpen1(!isCreationOpen1);
  };

  const openCreation2 = () => {
    setIsCreationOpen2(!isCreationOpen2);
  };

  const openCreation3 = () => {
    setIsCreationOpen3(!isCreationOpen3);
  };

  return (
    <div className='h-[15%] w-full  bg-white text-black'>
      <img src='logo.png' alt='image' className='absolute left-0 h-[14%] w-[7%]' />

      <div className='flex justify-evenly font-meow text-xl'>
        <a href='' className=' md:ml-11 lg:ml-20 px-5 pt-7 hover:text-gray-500'>
          MY WORK
        </a>

        <button
          id='myText'
          className='hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-5 md:pl-8'
          onClick={openCreation}
        >
          CREATION<FiChevronDown className='md:mt-1 lg:mt-2' />
        </button>
        {isCreationOpen && (
          <div className='shadow-2xl bg-white mt-2 md:mt-16 mx-5 fixed md:relative overflow-y-scroll p-10 w-full md:w-[17%] h-[45%] md:h-auto grid grid-cols-1 md:grid-cols-3'>
            {/* Content inside the expanded div */}
          </div>
        )}

        <button
          id='myText'
          className='hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-5 md:pl-8'
          onClick={openCreation1}
        >
          USERNAME<FiChevronDown className='md:mt-1 lg:mt-2' />
        </button>
        {isCreationOpen1 && (
          <div className='shadow-2xl bg-black mt-2 md:mt-16 mx-5 fixed md:relative overflow-y-scroll p-10 w-full md:w-[17%] h-[45%] md:h-auto grid grid-cols-1 md:grid-cols-3'>
            {/* Content inside the expanded div */}
          </div>
        )}

        <button
          id='myText'
          className='hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-5 md:pl-8'
          onClick={openCreation2}
        >
          USERNAME<FiChevronDown className='md:mt-1 lg:mt-2' />
        </button>
        {isCreationOpen2 && (
          <div className='shadow-2xl bg-black mt-2 md:mt-16 mx-5 fixed md:relative overflow-y-scroll p-10 w-full md:w-[17%] h-[45%] md:h-auto grid grid-cols-1 md:grid-cols-3'>
            {/* Content inside the expanded div */}
          </div>
        )}

        <button
          id='myText'
          className='hover:text-gray-500 flex cursor-pointer md:pt-2 lg:pt-7 pl-5 md:pl-8'
          onClick={openCreation3}
        >
          USERNAME<FiChevronDown className='md:mt-1 lg:mt-2' />
        </button>
        {isCreationOpen3 && (
          <div className='shadow-2xl bg-black mt-2 md:mt-16 mx-5 fixed md:relative overflow-y-scroll p-10 w-full md:w-[17%] h-[45%] md:h-auto grid grid-cols-1 md:grid-cols-3'>
            {/* Content inside the expanded div */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
 