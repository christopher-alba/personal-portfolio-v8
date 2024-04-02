import styled, { css } from "styled-components";
import FacebookIcon from "../../assets/facebookIcon.svg?react";
import InstagramIcon from "../../assets/instagramIcon.svg?react";
import GithubIcon from "../../assets/githubIcon.svg?react";
import LinkedInIcon from "../../assets/linkedinIcon.svg?react";
import { Container } from "../Container";

export const MainWrapper = styled("div")`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const MainBackgroundDiv = styled("div")`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundImg = styled("img")`
  height: 100vh;
  width: 100%;
  position: relative;
  right: 0;
  object-fit: cover;
  object-position: right
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  z-index: 2;
  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;
export const PageSummaryWrapper = styled("div")`
  width: 350px;
  position: relative;
  z-index: 2;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const NameWrapper = styled("div")`
  text-align: right;
  border-left: 1px solid ${({ theme }) => theme.colors.secondary1};
  margin-left: 50px;
  width: 600px;
  @media (max-width: 1500px) {
    border-left: none;
    margin-left: 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    z-index: 20;
  }
`;

export const UpperFade = styled("div")`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary1} 0%,
    rgba(0, 212, 255, 0) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  height: 30vh;
  width: 100%;
`;
export const LowerFade = styled("div")`
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.primary1} 0%,
    rgba(0, 212, 255, 0) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  height: 10vh;
  width: 100%;
  @media (max-width: 1100px) {
    height: 100%;
    z-index: 0;
  }
`;

export const Name = styled("h1")`
  font-family: "Italianno", cursive;
  font-size: 100px;
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: 600px) {
    font-size: 70px;
  }
`;

export const PageTitle = styled("h1")`
  @media (max-width: 600px) {
    margin-top: 50px;
    font-size: 2rem;
    text-align: center;
  }
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
`;
export const PageTitlePeriod = styled("span")`
  color: ${({ theme }) => theme.colors.tertiary1};
`;

export const PageSubTitle = styled("h3")`
  color: ${({ theme }) => theme.colors.secondary3};
  margin: 3px 0;
  font-size: 1.5rem;
  position: relative;
  z-index: 2;
  @media (max-width: 600px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const Overlay = styled("div")`
  background: ${({ theme }) => theme.colors.primary1 + "BB"};
  height: 100%;
  width: 100%;
  transition: 500ms;
  position: absolute;
  &:hover {
    background: transparent;
  }
`;

export const ImageWrapper = styled("div")`
  position: absolute;
  right: 0;
  width: 25vw;
  height: 70%;
  @media (max-width: 600px) {
    position: static;
    width: 90%;
    margin: 50px auto;
    height: 30vh;
  }
`;
const iconStyles = css`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.secondary2};
  transition: 500ms;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
  &:hover {
    filter: drop-shadow(0 0 5px ${({ theme }) => theme.colors.tertiary1});
  }
`;
export const Facebook = styled(FacebookIcon)`
  ${iconStyles}
`;
export const Instagram = styled(InstagramIcon)`
  ${iconStyles}
`;
export const Github = styled(GithubIcon)`
  ${iconStyles}
`;
export const LinkedIn = styled(LinkedInIcon)`
  ${iconStyles}
`;
export const StyledLink = styled("a")`
  text-decoration: none;
`;

export const IconWrapper = styled("div")`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
