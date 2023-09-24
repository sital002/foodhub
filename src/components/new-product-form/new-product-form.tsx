"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  productName: string;
  description: string;
  price: string;
  products: File[];
}

const NewProuctForm = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const getFormData: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append("file", data.products[0]);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET!
    );
    fetch(process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL!, {
      method: "POST",
      body: formData,
    }).then((res) =>
      res
        .json()
        .then((cloudinaryImg) => {
          setImages((prev) => [...prev, cloudinaryImg.secure_url]);
          addNewProduct(cloudinaryImg);
        })
        .catch((err) => console.log(err))
    );
    async function addNewProduct(cloudinaryImg: any) {
      const res = await fetch(`/api/products/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: data.productName,
          description: data.description,
          price: data.price,
          images: cloudinaryImg,
        }),
      });
      const result = await res.json();
      router.refresh();
      router.push("/");
    }
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
          <input
            type="file"
            {...register("products", {
              required: {
                value: true,
                message: "Product Image is required",
              },
            })}
          />
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
