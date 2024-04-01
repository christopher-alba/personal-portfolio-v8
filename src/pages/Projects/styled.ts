import styled from "styled-components";
export const ImagesWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
`;
export const ImageDiv = styled("div")`
  margin: 10px;
  aspect-ratio: 1/1;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 10px;
  width: 20%;
  @media (max-width: 800px) {
    width: 40%;
  }
  box-sizing: border-box;
  position: relative;
  text-align: center;
  box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? `${theme.colors.secondary1 + "15"} 0px 13px 27px -5px, ${
          theme.colors.secondary1 + "15"
        } 0px 8px 16px -8px`
      : "none"};
  background: ${({ theme }) => theme.colors.primary2};
  padding: 5px;
`;

export const ImageDivWide = styled("div")`
  margin: 10px;
  border-radius: 10px;
  aspect-ratio: 2.5/1;
  flex-grow: 1;
  overflow: hidden;
  width: 20%;
  @media (max-width: 800px) {
    width: 40%;
  }
  box-sizing: border-box;
  position: relative;
  text-align: center;
  box-shadow: ${({ theme }) =>
    theme.name === "light"
      ? `${theme.colors.secondary1 + "15"} 0px 13px 27px -5px, ${
          theme.colors.secondary1 + "15"
        } 0px 8px 16px -8px`
      : "none"};
  background: ${({ theme }) => theme.colors.primary1};
  padding: 5px;
`;

export const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 500ms;
  &:hover {
    opacity: 0;
  }
  background: ${({ theme }) => theme.colors.primary2};
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary1 + "AA"};
  font-weight: 700;
`;
export const OverlayInner = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.secondary1 + "22"};
`;
