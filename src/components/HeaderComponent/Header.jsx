import React,{useEffect,useRef} from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { NavHashLink} from 'react-router-hash-link';
import {
  BsSun,
} from "react-icons/bs";




const Header = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
//  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(document.querySelector('.navbar'));
//  const { themeContext, setThemeContext } = useContext(ThemeContext);

useEffect(()=>{
   const handleScroll = ()=>{
    if(window.scrollY>=100){
      navRef.current.classList.add('navbarBg');
    }
    else if(window.scrollY<100){
      navRef.current.classList.remove('navbarBg');
    }
  }

  window.addEventListener('scroll',handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

},[]);
  return <nav id="section" style={{
                    display: "flex",
                    justifyContent:"end",
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }} className="navbar sticky top-0"
                ref={navRef}>
                    <div style={{ margin: '15px' }}>
                      <NavHashLink to="#" className={isActive("#")?"active":"isNotActive"}>
                        HOME
                      </NavHashLink>
                    </div>
                    <div style={{ margin: '15px' }}>
                    <NavHashLink to="#github" className={isActive("#github")?"active":"isNotActive"} scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}>GITHUB</NavHashLink>
                    </div>
                    <div style={{ margin: '15px' }}>
                    <NavHashLink to="#workExp" className={isActive("#workExp")?"active":"isNotActive"} scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}>WORK</NavHashLink>
                    </div>
                    <div style={{ margin: '15px' }}>
                    <BsSun style={{ fontSize: "30px",color:"white" }}/>
                    </div>
                </nav>
};

export default Header;
