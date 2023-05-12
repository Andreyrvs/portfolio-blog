import styles from "./CardProject.module.css";
import GithubRepo from "@/types/GithubRepo";

export default function CardProject({
  name,
  description,
  html_url,
  homepage,
}: GithubRepo) {
  const handleHomePage = homepage ? (
    <a href={homepage} target="_blank" rel="noopener noreferrer">
      Live
    </a>
  ) : (
    ""
  );
  return (
    <>
      <div className={styles.items}>
        <p>{name}</p>
        <p>{description}</p>
        <a href={html_url} target="_blank">
          Repositório
        </a>
        <small>{handleHomePage}</small>
      </div>
    </>
  );
}
