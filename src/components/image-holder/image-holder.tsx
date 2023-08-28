"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

interface ImageHolderProps {
  images: any;
}
const ImageHolder = ({ images }: ImageHolderProps) => {
  console.log(images);
  return (
    <Carousel autoPlay={true} showThumbs={false} className="h-auto">
      {images.map((image: any, index: number) => {
        return (
          <div key={image + index}>
            <Image
              className="max-h-60 max-w-md"
              src={image.secure_url}
              alt={image.alt || ""}
              width={600}
              height={400}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageHolder;
