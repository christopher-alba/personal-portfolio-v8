import { FC, useContext, useEffect } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import Carousel from "../../components/Carousel/Carousel";
import { SummaryData } from "./summaryData";
import SummaryCard from "./SummaryCard";
import {
  Card,
  Offer,
  OffersWrapper,
  Pill,
  PillsWrapper,
  SmallTitle,
  TechWrapperMain,
  TertiaryPeriod,
} from "./styled";
import { Tech, Type } from "./techData";
import { Entry } from "contentful";
import { ThemeContext } from "styled-components";

const About: FC<{ contentful?: Entry }> = (contentful) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <HeroArea
        pageTitle="About"
        pageSubTitles={[
          "Find out what makes me tick.",
          "Learn what I’m good at.",
          "Decide if I fit your culture.",
        ]}
        imageUrl={
          theme?.name === "light"
            ? (contentful.contentful?.fields.landingImage as any)?.fields?.file
                ?.url
            : (contentful.contentful?.fields.landingImageDark as any)?.fields
                ?.file?.url
        }
      />
      <Container className="aboutContainer">
        <OffersWrapper>
          <Offer>
            <SubTitle
              mainText="What I can offer"
              description="As an employee"
            />
            <p>
              I am able to work in a full-stack environment. From traditional to
              cloud, monolith to microservices. From vanilla JavaScript, HTML,
              CSS, to fully fledged frontend frameworks like React. I will be an
              asset to your company and can contribute to your codebase within
              the first week.
            </p>
          </Offer>
          <Offer>
            <SubTitle
              mainText="Services I provide"
              description="As a freelancer"
            />
            <p>
              I can build simple websites on my own, freelance if needed. I will
              handle everything from design, construction, deployment, and
              getting your website on Google. Simple websites include SPA
              marketing websites, websites with simple monolith backend
              architecture and a SPA frontend, or a vanilla HTML, JS, and CSS
              website. *terms and conditions apply.
            </p>
          </Offer>
        </OffersWrapper>

        <SubTitle
          mainText="Summary Cards"
          description="Learn some interesting things about me"
        />
        <Carousel relativeContainerName="aboutContainer">
          {(contentful?.contentful?.fields?.summaryCards as SummaryData[])?.map(
            (x, index) => (
              <SummaryCard
                key={index}
                inverted={index % 2 === 0}
                mainTexts={x.mainTexts}
                mainTitle={x.mainTitle}
                subTitles={x.subTitles}
                topLabel={x.topLabel}
              ></SummaryCard>
            )
          )}
        </Carousel>
        <SubTitle
          mainText="Technologies"
          description="I usually use these technologies at work or as a hobby"
        />
        <TechWrapperMain>
          <Card>
            <SmallTitle>
              For Work<TertiaryPeriod>.</TertiaryPeriod>
            </SmallTitle>
            <PillsWrapper>
              {(contentful?.contentful?.fields?.technologies as Tech[])
                .filter((x) => x.type === Type.WORK)
                .sort()
                .map((x) => (
                  <Pill>{x.name}</Pill>
                ))}
            </PillsWrapper>
          </Card>
          <Card>
            <SmallTitle>
              As a Hobby<TertiaryPeriod>.</TertiaryPeriod>
            </SmallTitle>
            <PillsWrapper>
              {(contentful?.contentful?.fields?.technologies as Tech[])
                .filter((x) => x.type === Type.HOBBY)
                .sort()
                .map((x) => (
                  <Pill>{x.name}</Pill>
                ))}
            </PillsWrapper>
          </Card>
        </TechWrapperMain>
      </Container>
    </div>
  );
};

export default About;
