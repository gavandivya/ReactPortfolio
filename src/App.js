import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUsComponent/AboutUs";
import Article from "./components/ArticleComponent/Article";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="section">
        <Intro />
        <AboutUs/>
        <div className="box">
        <TechStack />
        </div>
        <div className="box">
        <Work />
        </div>
        <div className="box">
        <Skills />
        </div>
        <div className="box">
          <Graphic/>
        </div>
        <div className="box">
          <Project/>
        </div>
        <div className="box">
        <GithubStats />
        </div>
        <div className="box">
        <Article />
        </div>
        <div className="box">
          <Testimonial/>
          </div>
          <div className="box">
        <Contact />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
