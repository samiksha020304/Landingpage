import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'

const Landingpage1 = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
        setIsOpen(true);
    };
    const closeDialog = () => {
        setIsOpen(false);
    };

    return (<div><div><img src='https://i.pinimg.com/originals/96/e8/09/96e809474094c6e8b41291af31acf574.jpg ' className='absolute  h-[100%] w-[100%]' />
        <div className='text-white font-caprasimo pt-[2%] ml-[10%] text-xl relative z-10'>
            Miscord
        </div>
        <div className='inline-flex gap-3 mx-96 text-white relative z-10 '>
            <div className=' ml-[60%] font-normal md:inline-flex md:text-sm text-white text-sm md:space-x-10'> {/**link container */}
                <div>
                    <h1 onClick={openDialog} className='cursor-pointer hover:text-cyan-600'> Download </h1>

                    {isOpen && (
                        <div className='bg-slate-200 bg-opacity-70 fixed inset-0 flex items-center mx-52 my-20  z-10'>

                            <div>
                                <button onClick={closeDialog} className=" text-2xl text-black hover:text-red-800 font-bold py-2 px-4 relative z-10">
                                    <FiX />
                                </button>
                                <div className='mx-16 relative z-10'>
                                    <button>
                                        <img src='l1.png' className='border border-black rounded-xl' />
                                        <h1 className='border border-black bg-black text-white text-xl font-normal cursor-pointer rounded-2xl text-center hover:bg-gray-700 h-[50%] w-[70%] flex ml-[30%] mt-[3%]'>Download</h1>
                                    </button>
                                    <button>
                                        <img src='l2.png' className='mx-1 border border-black rounded-xl' />
                                        <h1 className='border border-black bg-black text-white text-xl font-normal cursor-pointer rounded-2xl text-center hover:bg-gray-700 h-[50%] w-[70%] flex ml-[40%] mt-[3%]'>Download</h1>
                                    </button>
                                    <button>
                                        <img src='l3.png' className='mx-1 border border-black rounded-xl' />
                                        <h1 className='border border-black bg-black text-white text-xl font-normal cursor-pointer rounded-2xl text-center hover:bg-gray-700 h-[50%] w-[70%] flex ml-[50%] mt-[3%]'>Download</h1>
                                    </button>


                                    <button>
                                        <img src='l4.png' className='mx-1 border border-black rounded-xl ' />
                                        <h1 className='border border-black bg-black text-white text-xl font-normal cursor-pointer rounded-2xl text-center hover:bg-gray-700 h-[50%] w-[70%] flex ml-[30%] mt-[3%]'>Download</h1>
                                    </button>
                                    <button>
                                        <img src='l5.png' className='mx-1 border border-black rounded-xl' />
                                        <h1 className='border border-black bg-black text-white text-xl font-normal cursor-pointer rounded-2xl text-center hover:bg-gray-700 h-[50%] w-[70%] flex ml-[40%] mt-[3%]'>Download</h1>
                                    </button>

                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div className='inline-flex gap-3 pt-[-10%] relative z-10'>
                <a href='/'><h1 className='cursor-pointer hover:text-cyan-600 text-white text-sm font-normal '> Nitro </h1></a>
                <a href='/Supportpage'><h1 className='cursor-pointer hover:text-cyan-600 text-white text-sm font-normal'> Discover</h1></a>
                <a href='/'><h1 className='cursor-pointer hover:text-cyan-600 text-white text-sm font-normal'> Blog </h1></a>
                <a href='/'><h1 className='cursor-pointer hover:text-cyan-600 text-white text-sm font-normal'> Careers </h1></a></div>
        </div><h3 className='font-sans mt-[-2%] text-lg w-[5%] ml-[90%] rounded-3xl text-center hover:bg-blue-300 cursor-pointer border border-black bg-white text-black relative z-10 '>
            <a href='/Login'>
                Login
            </a></h3>
    </div>
        <div>
            <p className='text-7xl font-caprasimo text-white text-center mt-[16%] relative z-10'>IMAGINE A PLACE...</p>
            <p className='text-2xl font-thin text-white text-center relative z-10'>...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
            <p className='text-2xl font-thin text-white text-center relative z-10'>Where just you and a handful of friends can spend time together. A place that makes it easy </p>
            <p className='text-2xl font-thin text-white text-center relative z-10'>to talk every day and hang out more often.</p>
        </div><input
            type='text'
            placeholder='Enter username'
            className=' text-white border border-black rounded-2xl text-center mt-[2%] w-[20%] ml-[40%] pt-[1%] h-[30%] relative z-10' />
        <div className='text-white font-thin hover:text-cyan-600 text-sm mt-[2%] ml-[35%]'>
            By registering, you agree to Discord's Terms of Service and Privacy Policy.
        </div></div>

    );
}

export default Landingpage1






