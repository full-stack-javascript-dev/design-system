
import React, { ReactNode } from 'react';
import { CarouselPromo } from './Carousel'
import { useCarousel } from "../utils/useCarousel"

export default {
  title:'components/Carousel'
}


const Carousel = ({ children, interval = 5000 }: { children: JSX.Element[] | JSX.Element, interval?: number }) => {
  const slides = children as ReactNode[];
  const length = slides.length;
  const [active, setActive, handlers, style] = useCarousel(length, interval);

  return (
    <div className="carousel">
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            onClick={() => setActive(index)}
            key={index}
            className={`${active === index ? "active" : ""}`}
          />
        ))}
      </ol>
      <div className="carousel-content" {...handlers} style={style}>
        <div className="carousel-item">{slides[slides.length - 1]}</div>
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            {slide}
          </div>
        ))}
        <div className="carousel-item">{slides[0]}</div>
      </div>
    </div>
  );
};

export const Basic = () => {

  return (
    <CarouselPromo style={{
      backgroundColor:'black',
      color:'white',
      width:"400px",
      border:"solid 1px red"
    }}>
      <Carousel interval={3000}>
        <div>one</div>
        <div>two</div>
      </Carousel>
    </CarouselPromo>
  )
}