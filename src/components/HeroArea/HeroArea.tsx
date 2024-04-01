import { FC } from "react";
import {
  Facebook,
  Github,
  IconWrapper,
  Instagram,
  LinkedIn,
  LowerFade,
  MainBackgroundDiv,
  Name,
  NameWrapper,
  PageSubTitle,
  PageSummaryWrapper,
  PageTitle,
  PageTitlePeriod,
  StyledContainer,
  StyledLink,
  UpperFade,
} from "./styled";

const HeroArea: FC<{
  pageTitle: string;
  pageSubTitles: string[];
  imageUrl: string;
}> = ({ pageTitle, pageSubTitles, imageUrl }) => {
  return (
    <MainBackgroundDiv $imageUrl={imageUrl}>
      <UpperFade />
      <StyledContainer>
        <PageSummaryWrapper>
          <PageTitle>
            {pageTitle}
            <PageTitlePeriod>.</PageTitlePeriod>
          </PageTitle>
          {pageSubTitles.map((x, index) => (
            <PageSubTitle key={index}>{x}</PageSubTitle>
          ))}
          <IconWrapper>
            <StyledLink
              href="https://www.facebook.com/christopher.alba.357/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </StyledLink>
            <StyledLink
              href="https://github.com/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </StyledLink>
            <StyledLink
              href="https://www.linkedin.com/in/christopher-alba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/alba.sy.chris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </StyledLink>
          </IconWrapper>
        </PageSummaryWrapper>
        <NameWrapper>
          <Name>Christopher Alba</Name>
          <PageSubTitle>SOFTWARE ENGINEER</PageSubTitle>
        </NameWrapper>
        <LowerFade />
      </StyledContainer>
    </MainBackgroundDiv>
  );
};

export default HeroArea;
