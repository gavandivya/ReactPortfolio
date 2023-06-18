import './App.css';
import Contact from './components/ContactComponent/Contact';
import Footer from './components/FooterComponent/Footer';
import MapComponent from './components/MapComponent/MapComponent';
import TechStack from './components/TechStackComponent/TechStack';

function App() {
  return (
    <>
      <TechStack />
      <div className='main' style={{ display: "flex" }}>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <Contact />
        <MapComponent />
      </div>
      <Footer />
    </>
  );
}

export default App;
