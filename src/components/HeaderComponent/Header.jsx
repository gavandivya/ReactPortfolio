import React, { useEffect, useRef, useState, useContext } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { BsSun, BsMoon } from "react-icons/bs";
import ThemeContext from "../../constants/ThemeContext";

const Header = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef(document.querySelector(".navbar"));
  const { themeContext, setThemeContext } = useContext(ThemeContext);

  const handleMode = () => {
    setThemeContext(themeContext === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (themeContext === "dark" && window.scrollY >= 30) {
      navRef.current.classList.add("navbarDarkBg");
      navRef.current.classList.remove("navbarBg");
    } else if (themeContext === "light" && window.scrollY >= 30) {
      navRef.current.classList.add("navbarBg");
      navRef.current.classList.remove("navbarDarkBg");
    }

    const handleScroll = () => {
      if (window.scrollY >= 30 && themeContext === "dark") {
        navRef.current.classList.add("navbarDarkBg");
        setNavbar(true);
      } else if (window.scrollY >= 30 && themeContext === "light") {
        navRef.current.classList.add("navbarBg");
        setNavbar(true);
      } else if (window.scrollY < 100) {
        navRef.current.classList.remove("navbarBg");
        navRef.current.classList.remove("navbarDarkBg");
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [themeContext]);

  return (
    <nav
      id="section"
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "5px 0 5px 5px",
        fontSize: "20px",
      }}
      className="navbar sticky top-0"
      ref={navRef}
    >
      <div style={{ margin: "15px" }}>
        <NavHashLink
          to="#"
          style={{
            color: themeContext === "dark" ? "#fff" : navbar ? "#000" : "#fff",
          }}
          className={isActive("#") ? "active" : "isNotActive"}
        >
          HOME
        </NavHashLink>
      </div>
      <div style={{ margin: "15px" }}>
        <NavHashLink
          style={{
            color: themeContext === "dark" ? "#fff" : navbar ? "#000" : "#fff",
          }}
          to="#github"
          className={isActive("#github") ? "active" : "isNotActive"}
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
        >
          GITHUB
        </NavHashLink>
      </div>
      <div style={{ margin: "15px" }}>
        <NavHashLink
          style={{
            color: themeContext === "dark" ? "#fff" : navbar ? "#000" : "#fff",
          }}
          to="#workExp"
          className={isActive("#workExp") ? "active" : "isNotActive"}
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest",
            })
          }
        >
          WORK
        </NavHashLink>
      </div>
      <div style={{ margin: "15px" }}>
        {themeContext === "light" ? (
          <BsSun
            style={{
              fontSize: "30px",
              color:
                themeContext === "dark" ? "#fff" : navbar ? "#000" : "#fff",
            }}
            onClick={handleMode}
          />
        ) : (
          <BsMoon
            style={{
              fontSize: "28px",
              color:
                themeContext === "dark" ? "#fff" : navbar ? "#000" : "#fff",
            }}
            onClick={handleMode}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
