'use client'

import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const getFormData: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(getFormData)}>
      <div className="border-1 border-gray-500 shadow-md shadow-black h-[450px] w-[380px] rounded-md py-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl mb-5 font-semibold">Sign In</h1>
        <input
          placeholder="Email"
          className="border-b-2 h-[40px] outline-none focus:placeholder-transparent focus:border-b-red-500 duration-100 transition-all  w-[90%] my-2"
          type="text"
          {...register("email", {
            required: {
              value: true,
              message: "email is missing"
            },
            pattern: {
              value: /^.*@.*$/,
              message: "invalid email format"
            }
          })}
        />
        <span className="text-red-500 text-sm mr-[220px] mt-[-10px]">{errors?.email?.message}</span>
        <input
          placeholder="Password"
          className="border-b-2 h-[40px] focus:placeholder-transparent focus:border-b-red-500 outline-none duration-100 transition-all w-[90%] my-2"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "password is missing"
            }
          })}
        />
        <span className="text-red-500 text-sm mr-[200px] mt-[-10px] inline">{errors?.password?.message}</span>
        <button className="w-[90%] h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3">Sign In</button>
        <a className="text-sm text-blue-500 my-5" href="">
          Having trouble logging in?
        </a>
        <button className="w-[90%] rounded-md cursor-pointer border h-[40px]">Sign Up</button>
      </div>
    </form>
  );
};

export default SignIn;
