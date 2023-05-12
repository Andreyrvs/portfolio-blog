import styles from "./CardProject.module.css";
import GithubRepo from "@/types/GithubRepo";

export default function CardProject({
  name,
  description,
  html_url,
  homepage,
}: GithubRepo) {
  const handleHomePage = homepage && (
    <a href={homepage} target="_blank" rel="noopener noreferrer">
      Live
    </a>
  );
  return (
    <>
      <li className={styles.card}>
        <div>
          <h1 className={styles.header}>{name}</h1>
          <p className={styles.font}>{description}</p>
        </div>
        <div className={styles.links}>
          <a className={styles.font} href={html_url} target="_blank">
            Repositório
          </a>
          <small>{handleHomePage}</small>
        </div>
      </li>
    </>
  );
}
