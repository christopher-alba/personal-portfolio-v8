import { FC, useContext, useEffect } from "react";
import HeroArea from "../../components/HeroArea";
import SubTitle from "../../components/SubTitle";
import { Container } from "../../components/Container";
import { Companies } from "./data";
import { Card, CardInverted, CardsWrapper } from "./styled";
import { ThemeContext } from "styled-components";
import { Entry } from "contentful";

const Career: FC<{ contentful?: Entry }> = (contentful) => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroArea
        pageTitle="Career"
        pageSubTitles={[
          "Learn where I started off.",
          "Find out where I am now.",
          "Its been a great journey so far.",
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
          mainText="Permanent Software Engineer"
          description="Where I continuously learn about developing scaling software"
        />
        <CardsWrapper>
          {(contentful?.contentful?.fields?.career as Companies)
            .filter((x) => x.type === "Work")
            .map((x) => (
              <Card>
                <h3>{x.name}</h3>
                <h2>{x.position}</h2>
                <h4
                  style={{
                    color: x.dateString.includes("Present")
                      ? theme?.colors.tertiary1
                      : "",
                  }}
                >
                  {x.dateString}
                </h4>
                <p>{x.summary}</p>
              </Card>
            ))}
        </CardsWrapper>
        <SubTitle
          mainText="Internships"
          description="Where I first learned about production grade software"
        />
        <CardsWrapper>
          {(contentful?.contentful?.fields?.career as Companies)
            .filter((x) => x.type === "Internship")
            .map((x) => (
              <CardInverted>
                <h3>{x.name}</h3>
                <h2>{x.position}</h2>
                <h4>{x.dateString}</h4>
                <p>{x.summary}</p>
              </CardInverted>
            ))}
        </CardsWrapper>
      </Container>
    </div>
  );
};

export default Career;
