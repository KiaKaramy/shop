import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import z, { email } from 'zod'
import { AuthChildProps } from './ForgetPassOneTimeLoginBoxParent'



const loginSchema = z
.object({
  email:z.string().email("شما باید ایمیل خود را وارد نمایید "),
  password:z.string().min(6,"پسورد شما حداقل باید بیشتر از ۶ کاراکتر باشد ")
})

type LoginFormData = z.infer<typeof loginSchema>


export default function Login({setLogin_or_register} : AuthChildProps) {


  const [showPassword , setShowPassword] = useState(false)

  const {
    register , 
    handleSubmit,
    formState : {errors , isSubmitting},
    reset
  } = useForm<LoginFormData>({
    resolver:zodResolver(loginSchema)
  })

  const onSubmit = async (data:LoginFormData) => {
    console.log("data => " , data)



    reset()
  }




return (
    <div className="min-w-lg flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white p-8 rounded-b-2xl shadow-md space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">ورود به حساب کاربری</h1>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-right">ایمیل</label>
          <input
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            className="w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#1abc9c]"
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
              className="w-full border rounded-lg px-6 py-4 focus:outline-none focus:border-[#1abc9c]"
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cursor-pointer bg-[#16a085] text-white rounded-lg py-2 font-medium hover:bg-[#138d75] transition disabled:opacity-60"
        >
          {isSubmitting ? "در حال ورود . . ." : "ورود"}
        </button>

        {/* Switch to Register */}
        <p className="text-center text-sm text-gray-500">
          حساب ندارید؟{" "}
          <span
            className="text-[#16a085] cursor-pointer"
            onClick={() => setLogin_or_register("Register")}
          >
            ثبت نام کنید
          </span>
        </p>
      </form>
    </div>
  );
}
