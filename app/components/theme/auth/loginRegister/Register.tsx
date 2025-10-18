import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';



import { AuthChildProps } from './LoginRegisterBoxParent';



const registerSchema = z
  .object({
    fullname:z.string().min(2 , "نام و نام خانوادگی باید بیشتر از ۲ کاراکتر باشد "),
    // username:z.string().min(2 , "نام کاربری شما باید بیشتر از ۲ کاراکتر باشد"),
    email:z.string().email("  "),
    password:z.string().min(6 , "پسورد شما حداقل باید بیشتر از ۶ کاراکتر باشد "),
    confirmPassword:z.string()
  })
  .refine(data => data.password === data.confirmPassword , {
    message:"گذرواژه همخوانی ندارد",
    path:["confirmPassword"],
  })

  type RegisterFormData = z.infer<typeof registerSchema>;



export default function Register({setLogin_or_register} : AuthChildProps) {

  const [showPassword , setShowPassword] = useState(false)


  const {
    register ,
    handleSubmit,
    formState:{errors , isSubmitting},
    reset,
    
  } = useForm<RegisterFormData>({
    resolver:zodResolver(registerSchema)
  })

  const onSubmit = async (data:RegisterFormData) => {
    console.log("data => " , data)




    reset()
  }
  
  


  return (
    <div className="min-w-lg flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white p-8 rounded-b-2xl shadow-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">ایجاد اکانت</h1>

        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-right">نام و نام خانوادگی شما</label>
          <input
            {...register("fullname")}
            placeholder="نام و نام خانوادگی شما"
            className=" w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#1abc9c] outline-none"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-2 w-full text-right">{errors.fullname.message}</p>
          )}
        </div>


         {/* Username
        <div>
          <label className="block mb-1 text-sm font-medium text-right">نام کاربری</label>
          <input
            {...register("username")}
            placeholder="نام کاربری"
            className=" w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#1abc9c] outline-none"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-2 w-full text-right">{errors.username.message}</p>
          )}
        </div> */}


        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-right">ایمیل</label>
          <input
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className=" w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#1abc9c] outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2 w-full text-right">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-right">گذرواژه</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="********"
              className=" w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#1abc9c] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 left-0 px-3 text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-2 w-full text-right">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-right">تایید گذرواژه</label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="تایید گذرواژه"
            className=" w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#1abc9c] outline-none"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2 w-full text-right">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-[#16a085] text-white rounded-lg py-2 font-medium hover:bg-[#138d75] transition disabled:opacity-60"
        >
          {isSubmitting ? "درحال ثبت نام شما . . . " : "ثبت نام"}
        </button>

       <p className="text-center text-sm text-gray-500">
          اکانت دارید ؟   {" "}
        
          <span className="text-[#16a085] cursor-pointer" onClick={e => setLogin_or_register("Login")}>
              وارد شوید

          </span>
        </p>
      </form>
    </div>
  );
}
