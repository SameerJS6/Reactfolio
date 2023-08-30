import { createContext, useContext, useState } from "react";
import { Images } from "../data";

const CarouselContext = createContext();

const CarouselProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(Images);
  const [isOpen, setIsOpen] = useState(false);

  const handlePrevClick = () => {
    const PrevIndex = currentIndex - 1;
    setCurrentIndex(currentIndex <= 0 ? images.length - 1 : PrevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(currentIndex >= images.length - 1 ? 0 : nextIndex);
  };

  const handleClick = (index) => setCurrentIndex(index);
  return (
    <CarouselContext.Provider
      value={{
        isOpen,
        setIsOpen,
        images,
        currentIndex,
        setCurrentIndex,
        handlePrevClick,
        handleNextClick,
        handleClick,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

const useSliderContext = () => {
  return useContext(CarouselContext);
};

export { CarouselProvider, useSliderContext };
