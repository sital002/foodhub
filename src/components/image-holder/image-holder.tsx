"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

interface ImageHolderProps {
  images: string[];
}
const ImageHolder = ({ images }: ImageHolderProps) => {
  console.log(images);
  return (
    <Carousel autoPlay={true} showThumbs={false} className="h-auto">
      {images.map((image, index) => {
        return (
          <div key={image + index}>
            <Image src={image} alt={image} width={600} height={400} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageHolder;
