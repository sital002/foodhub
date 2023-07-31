'use client'

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  username: string;
  email: string;
  password: string;
}

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const getData: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(getData)}>
      <div className="border-1 border-gray-500 shadow-md shadow-black min-h-[450px] w-[380px] rounded-md py-4 px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-3xl mb-5 font-semibold">Sign Up</h1>
        <input
          placeholder="Username"
          className="border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] ou outline-none focus:placeholder-transparent w-full my-2 pl-2 focus:border-b-red-500 transition-all duration-100"
          type="text"
          {...register('username', {
            required: {
              value: true,
              message: "Username is required",
            }
            
          })}
        />
        <span className="text-red-500 text-sm ">{errors?.username?.message}</span>
        <input
          placeholder="Email"
          className="border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] outline-none w-full my-2 pl-2 focus:placeholder-transparent focus:border-b-red-500 transition-all duration-100"
          type="text"
          {...register('email', {
            required: {
              value: true,
              message: "Email is required"
              ,
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "invalid email format"
            },
            maxLength: {
              value: 64,
              message: "Email must be at most 64 characters long",
            }
          })}
        />
        <span className="text-red-500 text-sm mr-[215px] mt-[-10px] inline">{errors?.email?.message}</span>
        <input
          placeholder="Password"
          className="border-t-0 border-l-0 border-r-0 border-b-2 p-1 h-[40px] outline-none w-full my-2 pl-2 focus:placeholder-transparent focus:border-b-red-500 transition-all duration-100"
          type="password"
          {...register('password', {
            required: {
              value: true,
              message: "Password is required"
            },
            minLength:{
              value: 8,
              message:"Password must be at least 8 characters long",
            },
            maxLength:{
              value: 64,
              message:"Password must be at most 64 characters long"
            }
          })}
        />
        <span className="text-red-500 text-sm">{errors?.password?.message}</span>
        <button className="w-full h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3">
          Sign Up
        </button>
        <a className="text-sm text-blue-500 my-5" href="">
          Having trouble logging in?
        </a>
        <Link href={"/signin"}><button  className="w-full rounded-md cursor-pointer border h-[40px]">Sign In</button></Link>
      </div>
    </form>
  );
};

