import React from "react";
import vegImg from "../../assets/veg-resturant.png";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  _id: string;
  productName: string;
  price: number;
  images: any;
  description?: string;
  alt: string;
}

const ProductCard = ({
  _id,
  productName,
  images,
  price,
  description,
  alt,
}: ProductItemProps) => {
  return (
    <Link href={`/products/${_id}`}>
      <div className="p-1  shadow-lg cursor-pointer border-solid border-2 ease-in duration-200 rounded-lg hover:border-sky-500">
        <Image
          src={images[0]?.secure_url || vegImg}
          alt={alt || ""}
          className="w-full mx-auto h-48"
          height={180}
          width={180}
        />
        <p className="px-2 py-1 text-gray-500">Baisnab Sweets</p>
        <p className="font-bold px-2  truncate ...">{productName}</p>
        <p className="px-2 py-1 font-bold text-red-500">NPR: {price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
