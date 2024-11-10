import React from 'react'

function page() {
  return (
    <div className='h-[70%] flex-col gap-y-20 p-4 flex justify-center items-center'>
      <h1 className='text-2xl md:text-4xl font-extrabold text-[#1f4c83]'>Grand Entrance Exam Result</h1>
    <div className='md:w-[600px] w-full px-4 h-72 shadow-2xl flex gap-y-6  flex-col'>
       <label htmlFor="regNum">Registration Number</label>
       <input className='w-full p-3 border border-gray-600 rounded-md' type="text" name="regNum" placeholder='Registration Number' required id="" />
       <label htmlFor="CNIC">CNIC or B-Form Number </label>
       <input className='w-full p-3 border border-gray-600 rounded-md' type="text" name="CNIC" placeholder='CNIC or B-Form Number ' required id="" />
       
    </div>
</div>
  )
}

export default page