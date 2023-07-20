import React, { useEffect, useState } from "react";
import "./Page.css/Fadingbackground.css";

const Fadingbackground = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const opacity = 1 - scrolled / 500; // Adjust this value to control when the fading effect starts
      setScrollOpacity(opacity < 0 ? 0 : opacity); // Ensure opacity doesn't go below 0

      // Optionally, you can change the background color here based on the scroll position
      const backgroundColor = `rgba(255, 255, 210, ${1 - opacity})`;
      document.body.style.backgroundColor = backgroundColor;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fading-background" style={{ opacity: scrollOpacity }} />
  );
};

export default Fadingbackground;
