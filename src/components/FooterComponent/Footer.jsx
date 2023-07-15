import React, { useContext } from "react";
import ThemeContext from "../../constants/ThemeContext";


const Footer = () => {
  const { themeContext } = useContext(ThemeContext);
  return (
    <footer className={`${themeContext === "dark"?"text-white":"text-black"} text-center p-4`}>
      © 2023 All right reserved. Designed with 💖 by Divya Gavandi.
    </footer>
  );
};

export default Footer;
