import React from 'react'

const general = () => {
  return (
    <>
      <div className='bg-rose-600 text-white p-8 flex flex-col justify-center items-center'>
        <h1 className='text-6xl  font-bold'>Hello world</h1>
        {/* <input type='text' required placeholder='Your Name' className=' text-6xl bg-transparent border border-slate-800 focus:border-none outline-none' /> */}
        <div className='flex gap-4 mt-8'>
          {/* <input type='email' required className='bg-transparent border-none focus:border-none outline-none' />
          <input type='tel' required className='bg-transparent border-none focus:border-none outline-none' />
          <input type='text' required className='bg-transparent border-none focus:border-none outline-none' /> */}

          <p>yourname@gmail.com</p>
          <p>08098762722</p>
          <p>lagos, Nigeria</p>
          <p>Linkedin</p>
        </div>
      </div>
    </>
  )
}

export default general
