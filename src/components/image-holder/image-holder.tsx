"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel"


interface ImageHolderProps {
    images: string[];
}
const ImageHolder = ({images}:ImageHolderProps) => {
    console.log(images)
  return (
    <Carousel autoPlay={true}  showThumbs={false}>
        {
             images.map((image, index) => {
                return  <Image src={image} alt={image} width={600} height={400} key={index+image}  />

             })
        }
    </Carousel>
  )
}

export default ImageHolder