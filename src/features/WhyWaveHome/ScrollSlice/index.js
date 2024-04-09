import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TitleSection,
  WrapperSection,
  Slide,
  ButtonNav,
  SliderContainer,
  SlideContent,
} from "./style";
import { Button } from "../styled";
import { useState } from "react";
import { ReactComponent as IconMain } from "../../../images/icons/sliderMain.svg";

export const ScrollSlice = ({ slices }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slices.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slices.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <WrapperSection>
      <TitleSection>Why choose us</TitleSection>
      <Button onClick={goToPrevious}>&lt;</Button>
      <SliderContainer>
        {slices.map((slide, index) => (
          <Slide
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <IconMain />
            <SlideContent>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </SlideContent>
          </Slide>
        ))}
      </SliderContainer>
      <Button onClick={goToNext}>&gt;</Button>
      <Button>View Our Services</Button>
    </WrapperSection>
  );
};
