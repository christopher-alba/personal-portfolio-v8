import { FC, ReactNode, useContext, useRef, useState } from "react";
import { CarouselSingle, Circle, ControlButtons, MainDiv } from "./styled";
import { useDraggable } from "react-use-draggable-scroll";
import useWindowWidth from "../../hooks/useWindowWidth";
import { ThemeContext } from "styled-components";

const Carousel: FC<{
  children: ReactNode[];
  relativeContainerName: string;
}> = ({ children }) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref as any);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const windowWidth = useWindowWidth();
  const theme = useContext(ThemeContext);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  if (windowWidth > 600)
    return (
      <MainDiv ref={ref as any} {...events}>
        {children.map((x) => x)}
      </MainDiv>
    );

  return (
    <>
      <CarouselSingle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <ControlButtons onClick={prevImage}>↑</ControlButtons>
            <ControlButtons onClick={nextImage}>↓</ControlButtons>
          </div>
          <div>
            {children.map((_, index) => (
              <Circle
                onClick={() => {
                  setCurrentImageIndex(index);
                }}
                style={{
                  background:
                    currentImageIndex === index
                      ? theme?.colors.tertiary1
                      : theme?.colors.secondary1,
                }}
              ></Circle>
            ))}
          </div>
        </div>

        {children[currentImageIndex]}
      </CarouselSingle>
    </>
  );
};

export default Carousel;
