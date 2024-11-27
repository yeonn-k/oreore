import { S } from "./Carousel.style";
import { CarouselItemProps, CarouselItem } from "../../../types/types";
import { useState } from "react";

const Carousel = ({ carouselData }: CarouselItemProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <S.CarouselWrap>
      <S.ChevronLeft onClick={handlePrev} />
      <S.ChevronRight onClick={handleNext} />

      <S.CarouselBox currentIdx={currentIndex}>
        {carouselData.map((item: CarouselItem) => {
          return (
            <S.CarouselImg key={item.id} imgUrl={item.imgUrl}>
              <S.CarouselText>{item.text}</S.CarouselText>
            </S.CarouselImg>
          );
        })}
      </S.CarouselBox>
    </S.CarouselWrap>
  );
};

export default Carousel;
