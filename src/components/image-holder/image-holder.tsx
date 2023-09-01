"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

interface ImageHolderProps {
  images: any;
}
const ImageHolder = ({ images }: ImageHolderProps) => {
  return (
    <Carousel autoPlay={true} showThumbs={false} className="h-auto">
      {images.map((image: any, index: number) => {
        return (
          <div key={image + index}>
            <Image
              className="w-full  h-full"
              src={image.secure_url}
              alt={image.alt || ""}
              width={300}
              height={200}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageHolder;
