import styled from "styled-components";
type MainDivProps = {
  $inverted: boolean;
};
export const MainDiv = styled("div")<MainDivProps>`
  background: ${({ theme, $inverted }) =>
    $inverted ? theme.colors.primary2 : theme.colors.secondary1};
  color: ${({ theme, $inverted }) =>
    !$inverted ? theme.colors.primary2 : theme.colors.secondary1};
  display: inline-block;
  border-radius: 15px;
  white-space: normal;
  padding: 20px;
`;
