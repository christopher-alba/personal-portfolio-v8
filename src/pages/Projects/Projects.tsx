import { FC, useContext, useEffect } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import { data, Project, Type } from "./data";
import { Link } from "react-router-dom";
import {
  Image,
  ImageDiv,
  ImageDivWide,
  ImagesWrapper,
  Overlay,
  OverlayInner,
} from "./styled";
import { Entry } from "contentful";
import { StyledLink } from "../../components/HeroArea/styled";
import { ThemeContext } from "styled-components";

const Projects: FC<{ contentful?: Entry }> = (contentful) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <HeroArea
        pageTitle="Projects"
        pageSubTitles={[
          "Most of these were done during university.",
          "A showcase of my skills through hobby development.",
        ]}
        imageUrl={
          theme?.name === "light"
            ? (contentful.contentful?.fields.landingImage as any)?.fields?.file
                ?.url
            : (contentful.contentful?.fields.landingImageDark as any)?.fields
                ?.file?.url
        }
      />
      <Container>
        <SubTitle
          mainText="During University"
          description="Projects outside the curriculum"
        />
        <ImagesWrapper>
          {(contentful?.contentful?.fields?.projects as Project[])
            .filter((x) => x.type === Type.UNIVERSITY)
            .map((x) => (
              <ImageDiv>
                <Link
                  to={{ pathname: `/projects/${x.name.replaceAll(" ", "")}` }}
                  state={x}
                  style={{ display: "block" }}
                >
                  <Overlay>
                    <OverlayInner>{x.name}</OverlayInner>
                  </Overlay>
                </Link>
                <Image src={x.imgSrc} />
              </ImageDiv>
            ))}
        </ImagesWrapper>
        <SubTitle
          mainText="Previous Personal Websites"
          description="Follow the journey of my personal portfolios"
        />
        <ImagesWrapper>
          {data.map((x) => (
            <ImageDivWide>
              <StyledLink
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Overlay>
                  <OverlayInner>{x.name}</OverlayInner>
                </Overlay>
              </StyledLink>
              <Image src={x.imageUrl} />
            </ImageDivWide>
          ))}
        </ImagesWrapper>
      </Container>
    </div>
  );
};

export default Projects;
