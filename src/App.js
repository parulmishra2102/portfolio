
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Topbar from './components/topbar/Topbar';
import Testimonial from './components/Testimonial/Testimonial';
import Work from './components/Work/Work';
import Portfolio from "./components/Portfolio/Portfolio"
import Menu from "./components/Menu/Menu"
import './App.scss';
import {useState} from 'react'
function App() {
  const [menuOpen, setMenuOpen]  = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Work></Work>
        <Testimonial></Testimonial>
        <Contact></Contact>
        
       
        
      </div>
    </div>
  );
}

export default App;
