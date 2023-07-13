"use client"

import CategoryCard from "@/components/category-card/category-card";
import Wrapper from "@/components/wrapper/wrapper";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {
  const CarouselData  = [
    {
      url:"https://merokinmel.com/storage/uploads/banner/64280e6f37fdc.png",
    }
  ] 
  return (
    <main>
      <Carousel autoPlay={true} className="my-2" showThumbs={false}>
                <div>
                    <img src="https://merokinmel.com/storage/uploads/banner/64280e6f37fdc.png" />
                </div>
                <div>
                    <img src="https://merokinmel.com/storage/uploads/banner/64280e6f37fdc.png" />
                </div>
            </Carousel>
            <Wrapper>
            <h2 className="text-2xl font-bold my-2">Shop By Categories</h2>
            <p className="text-gray-500">We've Got Something For Everyone</p>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            </Wrapper>
    </main>
  )
}
