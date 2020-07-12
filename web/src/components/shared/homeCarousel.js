import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: require("assets/images/w1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: require("assets/images/w2.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: require("assets/images/w3.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: require("assets/images/w4.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: require("assets/images/w5.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
  },
];

const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} width="1250" height="450" alt={item.altText} />
        <CarouselCaption
        //   captionText={item.caption}
        //   captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default HomeCarousel;
