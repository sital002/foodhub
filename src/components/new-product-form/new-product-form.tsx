"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import FileUploader from "../file-upload/file-upload";
import { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";

interface FormData {
  productName: string;
  description: string;
  price: string;
  products: File;
}

const NewProuctForm = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    },
  });
  const [images, setImages] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const getFormData: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    // console.log(images);

    const res = await fetch("http://localhost:3000/api/products/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, images }),
    });
    const result = await res.json();
    // console.log(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit(getFormData)}>
        <div className="border-1 border-gray-500 shadow-md shadow-black min-h-[450px] w-[380px] rounded-md py-4 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-3xl mb-5 font-semibold">
            Add New Product
          </h1>
          <input
            placeholder="Product Name"
            className="border-b-2 w-full my-2 mx-auto  h-[40px] inline-block outline-none focus:placeholder-transparent focus:border-b-red-500 duration-100 transition-all"
            type="text"
            {...register("productName", {
              required: {
                value: true,
                message: "Product Name is required",
              },
              maxLength: {
                value: 64,
                message: "Product Name must be at most 64 characters long",
              },
            })}
          />
          <span className="text-red-500 text-sm  ">
            {errors?.productName?.message}
          </span>
          <input
            placeholder="Description"
            className="border-b-2 h-[40px] focus:placeholder-transparent focus:border-b-red-500 outline-none duration-100 transition-all w-full my-2"
            type="text"
            {...register("description", {})}
          />
          <span className="text-red-500 text-sm">
            {errors?.description?.message}
          </span>
          <input
            placeholder="Price"
            className="border-b-2 w-full my-2 mx-auto  h-[40px] inline-block outline-none focus:placeholder-transparent focus:border-b-red-500 duration-100 transition-all"
            type="text"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
          />
          <span className="text-red-500 text-sm  ">
            {errors?.price?.message}
          </span>
          {/* <FileUploader images={images} setImages={setImages} /> */}
          <input
            type="file"
            {...register("products", {
              required: {
                value: true,
                message: "Product Image is required",
              },
            })}
          />
          {/* <AdvancedImage cldImg={images}  /> */}
          <button
            type="submit"
            className="w-full h-[40px] rounded-md cursor-pointer bg-red-500 text-white my-3 mx-auto"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default NewProuctForm;
