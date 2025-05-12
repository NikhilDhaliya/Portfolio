import React, { useRef } from "react";
import { Navbar } from "./Components/Navbar";
import Main from "./Components/Main";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
import Footer from "./Components/footer";
const App = () => {
  const homeRef = useRef(null);

  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      {/* Attach the ref to your home section */}
      <div ref={homeRef}>
        <Main />
      </div>
      <Aboutme />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      {/* Pass the ref to Footer if you want to use it there */}
      <Footer homeRef={homeRef} />
    </div>
  );
};

export default App;
