import styled from "styled-components";

export const MainDiv = styled("div")`
  white-space: nowrap;
  display: block;
  flex-wrap: wrap;
  cursor: grab;
  position: relative;
  overflow-x: visible;
  overflow-y: hidden;
  height: 60vh;
  & > * {
    margin: 10px;
    height: 50vh;
    width: 400px;
    overflow-y: auto;
  }
  transition: 500ms;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Controls = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top: 30px;
`;
type ControlButtonProps = {
  disabled: boolean;
};
export const ControlButton = styled("button")<ControlButtonProps>`
  border: none;
  margin: 20px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.secondary1 + "00" : theme.colors.secondary1 + "33"};
`;

export const CarouselSingle = styled("div")`
  display: flex;
  justify-content: center;
`;
export const Circle = styled("div")`
  width: 10px;
  height: 10px;
  margin: 20px;
`;

export const ControlButtons = styled("button")`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 100%;
  margin-top: 5px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.secondary1};
  border: 2px solid transparent;
  &:hover {
    border-color: ${({ theme }) => theme.colors.tertiary1};
  }
  transition: border-color 500ms;
`;
