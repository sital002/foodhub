"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroSectionImg from "@assets/hero-section-image.png";

const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      className="my-2"
      showThumbs={false}
      showStatus={false}
    >
      <>
        <Image src={heroSectionImg} width={500} height={500} alt="Food Hub" />
      </>
      <>
        <Image src={heroSectionImg} width={500} height={500} alt="Food Hub" />
      </>
    </Carousel>
  );
};

export default HeroSection;
