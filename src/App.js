import './App.css';
import Education from './Education';
import Header from './Header';
import Sec2 from './Sec2';
import Who from './Who';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Stamp from './Stamp';
import Project2 from './Project2';

function App() {

  return (
    <div className="backcover">
      <Header/>
      <Stamp/>
      <Who/>
      <Sec2/>
      <Education/>
      <Project2/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
  // "homepage": "http://Techanmolporwal.github.io/portfolio", 
  // "predeploy": "npm run build",
  //   "deploy": "gh-pages -d build",