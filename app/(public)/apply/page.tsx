import Link from 'next/link'
import React from 'react'

function Apply() {
  return (
    <div className='h-[70%]  flex justify-center items-center'>
        <div className='max-w-[600px] p-4 h-96 shadow-2xl flex gap-y-6 justify-center items-center flex-col'>
            <h1 className='text-xl'>
            Before continuing to the application please signUp to create account
            </h1>
            <Link href={'/signUp'}><button className='px-6 py-3 rounded-md bg-[#1f4c83] text-white'>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Apply