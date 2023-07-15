import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUsComponent/AboutUs";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";
import GithubStats from "./components/GithubStatsComponent/GithubStats";
import Header from "./components/HeaderComponent/Header";
import Intro from "./components/IntroComponent/Intro";
import Skills from "./components/SkillsComponent/Skills";
import TechStack from "./components/TechStackComponent/TechStack";
import Work from "./components/WorkTimelineComponent/Work";
import Testimonial from "./components/TestimonialComponent/Testimonial";
import Graphic from "./components/GraphicComponent/Graphic";
import Project from "./components/ProjectComponent/Project";
import Volunteer from "./components/VolunteerComponent/Volunteer";
import ThemeContext from "./constants/ThemeContext";
import { useState } from "react";


function App() {
  const [theme,setTheme] = useState("light");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ themeContext: theme, setThemeContext: setTheme }}>
      <div style={{backgroundColor:theme==="dark"?"black":"transparent"}}>
      <Header />
      <div className="section">
        <Intro />
        <AboutUs/>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
        <TechStack />
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
        <GithubStats />
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
        <Work />
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
        <Skills />
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
          <Project/>
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
          <Graphic/>
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
        <Volunteer />
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
          <Testimonial/>
        </div>
        <div className={`box ${theme==="dark"? "darkMode":"lightMode"}`}>
        <Contact />
        </div>
      </div>
      <Footer />
      </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
