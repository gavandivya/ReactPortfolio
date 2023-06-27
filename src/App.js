import "./App.css";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";
import GithubStats from "./components/GithubStatsComponent/GithubStats";
import Header from "./components/HeaderComponent/Header";
import MapComponent from "./components/MapComponent/MapComponent";
import TechStack from "./components/TechStackComponent/TechStack";

function App() {
  return (
    <>
      <Header />
      <div className="section" style={{ display: "flex" }}>
        <Contact />
        <MapComponent />
      </div>
      <div className="section">
        <TechStack />
      </div>
      <div className="section">
        <GithubStats />
      </div>
      <Footer />
    </>
  );
}

export default App;
