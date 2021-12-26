import './App.scss';
// import Profile from './PortfolioContainer/Home/Profile';
import Topbar from './PortfolioContainer/topbar/Topbar'
import Intro from './PortfolioContainer/intro/Intro'
import Portfolio from './PortfolioContainer/portfolio/Portfolio'
import Work from './PortfolioContainer/work/Work'
import Testimonial from './PortfolioContainer/Testimonial/Testimonial'
import Contact from './PortfolioContainer/Contact/Contact'
import  Menu  from './PortfolioContainer/menu/Menu';
import {useState} from 'react'
import {
  BrowserRouter,
   Routes,
  Route
} from "react-router-dom";


function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
     <BrowserRouter>
     
      <div className="app">

          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
            <Intro/>
            <Portfolio/>
            <Work/>
            <Testimonial/>
            <Contact/>
          </div>

      </div>
     </BrowserRouter>
  );
}

export default App;
