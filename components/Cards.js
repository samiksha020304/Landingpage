import React from 'react'

const Cards = () => {
  return (
    
    <div className="grid grid-cols-3 gap-5 mt-10 md:mx-6 lg:mx-9">
 
  <div className="card hover:-mt-3 cursor-pointer ">
    <img src='web.png' alt='image' className='w-fit h-fit  '></img>
  </div>

  <div className="card  hover:-mt-3">
     <img src='web.png' alt='image' className=''/>
  </div>

  <div className="card hover:-mt-3">
   <img src='web.png'alt='image' className=''/>
    
  </div>

</div>

  )
}

export default Cards
