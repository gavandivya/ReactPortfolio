import "./App.css";
import Article from "./components/ArticleComponent/Article";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";
import GithubStats from "./components/GithubStatsComponent/GithubStats";
import Header from "./components/HeaderComponent/Header";
import MapComponent from "./components/MapComponent/MapComponent";
import Skills from "./components/SkillsComponent/Skills";
import TechStack from "./components/TechStackComponent/TechStack";
import Work from "./components/WorkTimelineComponent/Work";

function App() {
  return (
    <>
      <Header />
      <div className="section">
        <TechStack />
      </div>
      <div className="section">
        <Work />
      </div>
      <div className="section">
        <Skills />
      </div>
      <div className="section">
        <GithubStats />
      </div>
      <div className="section flex flex-wrap">
        <Contact />
        <MapComponent />
      </div>
      <Footer />
    </>
  );
}

export default App;
