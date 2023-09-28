"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homeImg from "@assets/2.png";
import services from "@assets/1.png";

const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      className="my-2 "
      showThumbs={false}
      showStatus={false}
    >
      <>
        <Image src={homeImg} width={500} height={500} alt="Food Hub" />
      </>
      <>
        <Image src={services} width={500} height={500} alt="Food Hub" />
      </>
    </Carousel>
  );
};

export default HeroSection;
