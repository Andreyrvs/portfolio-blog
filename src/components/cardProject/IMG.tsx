import Image from "next/image";
import styles from "./Img.module.css";
import GithubRepo from "@/types/GithubRepo";

const ALT_ARROW_UP = "seta em diagonal para a direita";
const ARROW_UP_SIZE = 8;

export default function IMG({
  name,
  description,
  html_url,
  homepage,
  src,
}: GithubRepo) {
  const handleWhiteSpaces = (name: string = "empty") => {
    const newStr = name.replace(/[-\d]/g, " ");
    const removeWithSpaces = newStr.trim();

    return removeWithSpaces;
  };

  const handleHomePage = homepage && (
    <a
      href={homepage}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Preview</p>
      <Image
        className={styles.arrow}
        src="arrow-up-diagonal.svg"
        width={ARROW_UP_SIZE}
        height={ARROW_UP_SIZE}
        alt={ALT_ARROW_UP}
      />
    </a>
  );

  return (
    <>
      <li className={styles.card}>
        <Image
          className={styles.imagem}
          src={`/mockups/${src}.png`}
          width={904}
          height={564}
          alt="mock"
          loading="lazy"
        />
        <div className={styles.name}>
          <h1 className={styles.header}>{handleWhiteSpaces(name)}</h1>
          <div className={styles.links_container}>
            <a className={styles.link} href={html_url} target="_blank">
              <p>Repositório</p>
              <Image
                className={styles.arrow}
                src="arrow-up-diagonal.svg"
                width={ARROW_UP_SIZE}
                height={ARROW_UP_SIZE}
                alt={ALT_ARROW_UP}
              />
            </a>
            <small>{handleHomePage}</small>
          </div>
        </div>
      </li>
    </>
  );
}
