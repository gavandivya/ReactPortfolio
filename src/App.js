import "./App.css";
import Article from "./components/ArticleComponent/Article";
import Certification from "./components/CertificationComponent/Certification";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";
import GithubStats from "./components/GithubStatsComponent/GithubStats";
import Header from "./components/HeaderComponent/Header";
import Intro from "./components/IntroComponent/Intro";
import MapComponent from "./components/MapComponent/MapComponent";
import Skills from "./components/SkillsComponent/Skills";
import TechStack from "./components/TechStackComponent/TechStack";
import Testimonial from "./components/TestimonialComponent/Testimonial";
import Work from "./components/WorkTimelineComponent/Work";

function App() {
  return (
    <>
      <Header />
      <div className="section">
        <Intro />
        <TechStack />
        <Work />
        <Skills />
        <GithubStats />
        <Article />
        {/* <Certification /> */}
        {/* <Testimonial /> */}
        <Contact />
        {/* <MapComponent /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
