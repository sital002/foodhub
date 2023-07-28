'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import FileUploader from "../file-upload/file-upload";

interface FormData {
    productName: string;
     description: string;
     price: string;
}

const NewProuctForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const getFormData: SubmitHandler<FormData> = async(data)=> {
    // console.log(data);
    const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(data),
    })
    const result = await res.json()
    console.log(result)

  };
 

  return (
    <>
    <form onSubmit={handleSubmit(getFormData)}>
      <div className="border-1 border-gray-500 shadow-md shadow-black min-h-[450px] w-[380px] rounded-md py-4 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-3xl mb-5 font-semibold">Add New Product</h1>
        <input
          placeholder="Product Name"
          className="border-b-2 w-full my-2 mx-auto  h-[40px] inline-block outline-none focus:placeholder-transparent focus:border-b-red-500 duration-100 transition-all"
          type="text"
          {...register("productName", {
            required: {
              value: true,
              message: "Product Name is required"
            },
            maxLength: {
              value: 64,
              message: "Product Name must be at most 64 characters long",
            }

          })}
        />
        <span className="text-red-500 text-sm  ">{errors?.productName?.message}</span>
        <input
          placeholder="Description"
          className="border-b-2 h-[40px] focus:placeholder-transparent focus:border-b-red-500 outline-none duration-100 transition-all w-full my-2"
          type="password"
          {...register("description", {
            required: {
              value: true,
              message: "Description is required"
            },
            minLength:{
              value: 50,
              message:"Description must be at least 50 characters long"
            },
            maxLength:{
              value: 250,
              message:"Description must be at most 64 characters long"
            }
          })}
        />
        <span className="text-red-500 text-sm">{errors?.description?.message}</span>
        <input
          placeholder="Price"
          className="border-b-2 w-full my-2 mx-auto  h-[40px] inline-block outline-none focus:placeholder-transparent focus:border-b-red-500 duration-100 transition-all"
          type="text"
          {...register("price", {
            required: {
              value: true,
              message: "Price is required"
            },
          })}
        />
        <span className="text-red-500 text-sm  ">{errors?.price?.message}</span>
        <FileUploader/>
        <button type="submit" className="w-full h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3 mx-auto">Add</button>
      </div>
    </form>
    </>

  );
};

export default NewProuctForm;
