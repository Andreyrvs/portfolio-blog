import Image from "next/image";
import styles from "./Img.module.css";
import GithubRepo from "@/types/GithubRepo";
import { useState } from "react";

export default function IMG({
  name,
  description,
  html_url,
  homepage,
}: GithubRepo) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhiteSpaces = (name: string = "empty") => {
    const newStr = name.replace(/[-\d]/g, " ");
    const removeWithSpaces = newStr.trim();

    return removeWithSpaces;
  };

  const handleHomePage = homepage && (
    <a href={homepage} target="_blank" rel="noopener noreferrer">
      Live
    </a>
  );

  const handleButtonClick = () => {
    setIsOpen(true);
  };
  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleModal = isOpen && (
    <dialog open>
      <h1 className={styles.header}>{handleWhiteSpaces(name)}</h1>
      <p className={styles.font}>{description}</p>
      <div className={styles.links}>
        <a className={styles.font} href={html_url} target="_blank">
          Repositório
        </a>
        <small>{handleHomePage}</small>
      </div>
      <button onClick={handleCloseClick}>Fechar modal</button>
    </dialog>
  );

  return (
    <>
      <li onClick={handleButtonClick} className={styles.card}>
        <>{handleModal}</>
        <Image
          className={styles.imagem}
          src="/1mockup-mac.png"
          width={904}
          height={564}
          alt="mock"
        />
      </li>
    </>
  );
}
