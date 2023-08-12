'use client'

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react"

interface FormData {
  email: string;
  password: string;
}

export default function Page() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const getFormData: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
 

  return (
    <>
    <form onSubmit={handleSubmit(getFormData)}>
      <div className="border-1 border-gray-500 shadow-md shadow-black min-h-[450px] w-[380px] rounded-md py-4 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-3xl mb-5 font-semibold">Sign In</h1>
        <input
          placeholder="Email"
          className="border-b-2 w-full my-2 mx-auto  h-[40px] inline-block outline-none focus:placeholder-transparent focus:border-b-red-500 duration-100 transition-all"
          type="text"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required"
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format"
            },
            maxLength: {
              value: 64,
              message: "Email must be at most 64 characters long",
            }

          })}
        />
        <span className="text-red-500 text-sm  ">{errors?.email?.message}</span>
        <input
          placeholder="Password"
          className="border-b-2 h-[40px] focus:placeholder-transparent focus:border-b-red-500 outline-none duration-100 transition-all w-full my-2"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required"
            },
            minLength:{
              value: 8,
              message:"Password must be at least 8 characters long"
            },
            maxLength:{
              value: 64,
              message:"Password must be at most 64 characters long"
            }
          })}
        />
        <span className="text-red-500 text-sm">{errors?.password?.message}</span>
        <button type="submit" className="w-full h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3 mx-auto">Sign In</button>
        <button type="button" className="w-full h-[40px] rounded-md cursor-pointer text-black my-3 border" onClick={()=>signIn("github",{redirect:true,callbackUrl:process.env.NEXT_PUBLIC_BASE_URL})}>Sign in with Github</button>
        {/* <Link href={"/api/auth/signin"}><button className="w-full h-[40px] rounded-md cursor-pointer text-black my-3 border" >Sign in with Other Options</button></Link> */}
        <a className="text-sm text-blue-500 my-5" href="">
          Having trouble logging in?
        </a>
        <Link href={'/signup'}><p className="min-w-[350px] flex justify-center items-center rounded-md cursor-pointer border h-[40px]">Sign Up</p></Link>
      </div>
    </form>
    </>

  );
};


