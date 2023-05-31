import Image from "next/image";
import styles from "./Img.module.css";
import GithubRepo from "@/types/GithubRepo";

export default function IMG({
  name,
  description,
  html_url,
  homepage,
}: GithubRepo) {
  const handleWhiteSpaces = (name: string = "empty") => {
    const newStr = name.replace(/[-\d]/g, " ");
    const removeWithSpaces = newStr.trim();

    return removeWithSpaces;
  };

  const handleHomePage = homepage && (
    <a href={homepage} target="_blank" rel="noopener noreferrer">
      Preview
    </a>
  );

  return (
    <>
      <li className={styles.card}>
        <Image
          className={styles.imagem}
          src="/1mockup-mac.png"
          width={904}
          height={564}
          alt="mock"
        />
        <div className={styles.name}>
          <h1 className={styles.header}>{handleWhiteSpaces(name)}</h1>
          <div className={styles.links}>
            <a className={styles.font} href={html_url} target="_blank">
              Repositório
            </a>
            <small>{handleHomePage}</small>
          </div>
        </div>
      </li>
    </>
  );
}