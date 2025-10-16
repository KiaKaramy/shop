'use client'

import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

type AuthTab = "Login" | "Register"

export interface AuthChildProps {
  setLogin_or_register: React.Dispatch<React.SetStateAction<AuthTab>>
}

export default function LoginRegisterBoxParent() {


  const [Login_or_register , setLogin_or_register] = useState<AuthTab>('Login') // Login Register

  // const login = 
  // const register = 
  const activeTab = 'border-b border-b-[#1abc9c] text-[#1abc9c] text-black '

  return (
    <div className='parent '>
    


      <div className={`list-tbas  bg-white p-8 rounded-t-2xl shadow-md space-y-5 flex mb-5 w-full justify-center flex-row-reverse`}>
        <div className={`tab Login px-3 cursor-pointer text-3xl pb-3 mb-0 ${Login_or_register === 'Login' ? activeTab : '' }`} onClick={() => setLogin_or_register('Login')}>ورود</div>
        <div className={`tab Register px-3 cursor-pointer text-3xl pb-3 mb-0 ${Login_or_register === 'Register' ? activeTab : '' }`} onClick={() => setLogin_or_register('Register')}>ثبت نام</div>
      </div>






      <div className={` `}>

      {
        Login_or_register === 'Login' ? <Login setLogin_or_register={setLogin_or_register} /> : <Register setLogin_or_register={setLogin_or_register} /> 
      }
      
      </div>

    </div>
  )
}
