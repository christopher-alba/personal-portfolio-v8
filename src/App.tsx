import "./App.css";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import { useEffect, useState } from "react";
import { Entry } from "contentful";
import { client } from "./main";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Project from "./pages/Project/Project";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { animated, useSpring } from "@react-spring/web";

function App() {
  const [contentful, setContentful] = useState<Entry>();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")?.length ?? -1 > 0
      ? JSON.parse(localStorage.getItem("theme") as string)
      : (contentful?.fields.themes as DefaultTheme)?.light
  );

  useEffect(() => {
    client
      .getEntry(import.meta.env.VITE_CONTENTFUL_ENTRY_ID)
      .then((entry) => {
        console.log(entry);
        setContentful(entry);
      })
      .catch(console.error);
  }, []);

  const updateTheme = (themeName: string) => {
    if (themeName === "light") {
      localStorage.setItem(
        "theme",
        JSON.stringify((contentful?.fields.themes as any).light)
      );
      setTheme((contentful?.fields.themes as any).light);
    } else {
      localStorage.setItem(
        "theme",
        JSON.stringify((contentful?.fields.themes as any).dark)
      );
      setTheme((contentful?.fields.themes as any).dark);
    }
  };

  useEffect(() => {
    if (contentful !== undefined) {
      const localTheme: DefaultTheme | null = JSON.parse(
        localStorage.getItem("theme") ?? "{}"
      ) as DefaultTheme | null;

      if (localTheme?.name) {
        //compare values with contentful theme
        console.log(localTheme);

        if (localTheme.name === "light") {
          if (
            JSON.stringify((contentful?.fields.themes as any).light) !==
            JSON.stringify(localTheme)
          ) {
            updateTheme("light");
          }
        } else if (localTheme.name === "dark") {
          if (
            JSON.stringify((contentful?.fields.themes as any).dark) !==
            JSON.stringify(localTheme)
          ) {
            updateTheme("dark");
          }
        }
      } else {
        localStorage.setItem(
          "theme",
          JSON.stringify((contentful?.fields.themes as any).light)
        );
        setTheme((contentful?.fields.themes as any).light);
      }
    }
  }, [contentful]);

  const contentAnim = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
    delay: 100,
  });

  if (contentful === undefined || theme === undefined)
    return (
      <div className="mainWrapper">
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="loadingText">Fetching content from Contentful.</h3>
        <p className="loadingTextBottom">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/christopher-alba/"
            target="_blank"
            className="link"
          >
            Christopher Sy Alba.
          </a>
        </p>
      </div>
    );

  return (
    <animated.div style={contentAnim}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar setTheme={setTheme} contentful={contentful} />
        <Routes>
          <Route path="/" element={<About contentful={contentful} />} />
          <Route path="/career" element={<Career contentful={contentful} />} />
          <Route
            path="/projects"
            element={<Projects contentful={contentful} />}
          />
          <Route
            path="/projects/:projectName"
            element={<Project contentful={contentful} />}
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </animated.div>
  );
}

export default App;
