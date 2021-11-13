import React from "react";
import { SwiperSlide } from "swiper/react/swiper-react";
import { FreeMode } from "swiper";
import { Image, Slider } from "./Carousel.styles";
import ImageSource from "../../images/carousel-slide.png";

type CarouselProps = {
  className?: string;
};

const Carousel = ({ className }: CarouselProps) => {
  return (
    <Slider
      modules={[FreeMode]}
      spaceBetween={12}
      slidesPerView={"auto"}
      className={className}
    >
      {Array(6)
        .fill(0)
        .map((el, index) => (
          <SwiperSlide key={index}>
            <Image src={ImageSource} loading={"lazy"} />
          </SwiperSlide>
        ))}
    </Slider>
  );
};

// export default Carousel;
export default Carousel;
