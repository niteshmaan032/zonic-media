// import "../style/loader.css";

// function Loader() {
//   return (
//     <>
//       <div className="loader-wrapper">
//         <div className="loader"></div>
//       </div>
//     </>
//   );
// }

// export default Loader;

"use client";

import React, { useState, useEffect } from "react";
import "../style/loader.css";

function Loader() {
  const [isLoaded, setIsLoaded] = useState(false); // Browser signal
  const [timerDone, setTimerDone] = useState(false); // 3-second signal
  const [render, setRender] = useState(true); // Component mounting
  const [isVisible, setIsVisible] = useState(true); // CSS Opacity

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerDone(true);
    }, 2000);

    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && timerDone) {
      setIsVisible(false);

      const unmountTimer = setTimeout(() => {
        setRender(false);
      }, 500);

      return () => clearTimeout(unmountTimer);
    }
  }, [isLoaded, timerDone]);

  if (!render) return null;

  return (
    <div className={`loader-wrapper ${!isVisible ? "loader-hidden" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
