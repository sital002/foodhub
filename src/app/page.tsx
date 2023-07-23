"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CategoryCard from "@components/category-card/category-card";
import Wrapper from "@components/wrapper/wrapper";
import backeryImg from '@assets/bakery.png';
import heroSectionImg from '@assets/hero-section-image.png';
import nonVegImg from '@assets/non-veg-resturant.png'
import vegImg from '@assets/veg-resturant.png'
import ProductCard from "@components/product-card/product-card";

  async function getProduct(){
    const res = await fetch("https://dummyjson.com/products")
      // Recommendation: handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
 }
export default async function Home() {
  const data =  await getProduct();
  console.log(data)

  return (
    <main>
      <Carousel autoPlay={true} className="my-2" showThumbs={false}>
        <div><Image src={heroSectionImg} width={500} height={500} alt="Food Hub" /></div>
        <div><Image src={heroSectionImg} width={500} height={500} alt="Food Hub" /></div>
      </Carousel>
      <Wrapper>
        <h2 className="text-2xl font-bold my-2">Shop By Categories</h2>
        <p className="text-gray-500">We've Got Something For Everyone</p>
        <CategoryCard title="Veg Resturant" img={vegImg} alt={"Veg Resturant"} />
        <CategoryCard title="Non Veg Resturant" img={nonVegImg} alt={"Non Veg Resturant"} />
        <CategoryCard title="Bakery" img={backeryImg} alt={"Bakery"} />
      </Wrapper>
      <Wrapper>
        <h2 className="text-2xl font-bold my-2">Popular Products</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Wrapper>
    </main>
  )
}
