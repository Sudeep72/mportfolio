import { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Planet from "./components/Planet";
import { GlobalStyle, theme } from "./theme/GlobalStyles";
import AboveTheFold from "./sections/AboveTheFold";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Stars from "./components/Stars";
import BackgroundGlow from "./components/BackgroundGlow";
import Cursor from "./components/cursor";
import About from "./sections/About";

export default function App() {
  const AboveTheFoldRef = useRef<HTMLDivElement>();
  const AboutRef=useRef<HTMLDivElement>();
  const WorkRef = useRef<HTMLDivElement>();
  const ProjectsRef = useRef<HTMLDivElement>();
  const ContactRef = useRef<HTMLDivElement>();
  

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sudeep's Portfolio</title>
      </Helmet>
      <GlobalStyle />
      <Planet />
      <BackgroundGlow />
      <Stars />
      <Cursor />
      <Header
        AboveTheFoldRef={AboveTheFoldRef}
        AboutRef={AboutRef}
        WorkRef={WorkRef}
        ProjectsRef={ProjectsRef}
        ContactRef={ContactRef}
      
      />
     
      <Page>
        
        <AboveTheFold ref={AboveTheFoldRef} />
        <About ref={AboutRef} />
        <Work ref={WorkRef} />
        <Projects ref={ProjectsRef} />
        <Contact ref={ContactRef} />
      
        <Footer />
    
      </Page>
    </ThemeProvider>
  );
}

const Page = styled.main`
  display: flex;
  flex-direction: column;
`;