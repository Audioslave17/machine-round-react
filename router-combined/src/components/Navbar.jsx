import React from 'react'

const Navbar = () => {
  const members = [
    {
        name: "",
        goto: ""
    },
  ]
    
  return (
    <div className='flex w-full h-[20%] bg-black items-center justify-between'>
        <div>
            <p className='text-white text-2xl p-3'>Anurag</p>
        </div>
        <div className='flex items-center justify-center text-white space-x-6 mr-9 ml-16'>
            <p>abc</p>
            <p>abc</p>
            <p>abc</p>
        </div>
    </div>
  )
}

export default Navbar