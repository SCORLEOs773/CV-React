import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <AboutMe />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
