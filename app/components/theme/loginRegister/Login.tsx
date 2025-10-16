import React from 'react'

export default function Login() {
  return (
    <div className={`min-w-lg flex flex-col  bg-white p-8 rounded-b-2xl shadow-md space-y-5`} >
      <input type="text" className='p-3 border mb-3 rounded outline-0 ' placeholder='' />
      <input type="text" className='p-3 border mb-3 rounded outline-0 ' placeholder='' />
      <input type="text" className='p-3 border mb-3 rounded outline-0 ' placeholder='' />
    </div>
  )
}
