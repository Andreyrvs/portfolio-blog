import styles from "./CardProject.module.css";
import GithubRepo from "@/types/GithubRepo";

export default function CardProject({
  name,
  description,
  html_url,
}: GithubRepo) {
  return (
    <>
      <div className={styles.items}>
        <p>{name}</p>
        <p>{description}</p>
        <a href={html_url} target="_blank">
          Repositório
        </a>
      </div>
    </>
  );
}
