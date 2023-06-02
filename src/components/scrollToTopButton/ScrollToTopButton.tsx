import React, { useState, useEffect } from "react";
import style from "./scrollToTopButton.module.css";
import ArrowUp from "/public/arrow-up-340.svg";
import Image from "next/image";

const MARGIN_TOP = 54;
const INITIAL_SCROLL = 0;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (
      document.body.scrollTop > MARGIN_TOP ||
      document.documentElement.scrollTop > MARGIN_TOP
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    document.body.scrollTop = INITIAL_SCROLL;
    document.documentElement.scrollTop = INITIAL_SCROLL;
  }

  const handleVisibility = isVisible && (
    <button
      id="myBtn"
      title="Go to top"
      onClick={handleClick}
      className={style.scrollBtn}
    >
      <div className="up"></div>
      {/* <Image
        src={ArrowUp}
        alt="Seta apontando para o topo da página"
        width={75}
        height={50}
      /> */}
    </button>
  );

  return <>{handleVisibility}</>;
}

export default ScrollToTopButton;
