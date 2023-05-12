import styles from "./CardProject.module.css";
import GithubRepo from "@/types/GithubRepo";

export default function CardProject({
  name,
  description,
  html_url,
  homepage,
}: GithubRepo) {
  const handleRepositoriesNames = (name: string) => {
    if (name.includes("stranger")) {
      return handleStranger(name);
    }
    return handleDefault(name);
  };

  const handleStranger = (name: string) => {
    const removeDot = name.replace(/\d+\./g, "");
    const removeHyphen = removeDot.replace(/[-\d]/g, " ");

    const inserted = removeHyphen.includes("-1")
      ? removeHyphen.concat(" Backend")
      : removeHyphen.concat(" Frontend");

    const removeWithSpaces = inserted.trim();
    return removeWithSpaces;
  };

  const handleDefault = (name: string) => {
    const newStr = name.replace(/[-\d]/g, " ");

    const removeWithSpaces = newStr.trim();
    return removeWithSpaces;
  };

  const handleHomePage = homepage && (
    <a href={homepage} target="_blank" rel="noopener noreferrer">
      Live
    </a>
  );
  return (
    <>
      <li className={styles.card}>
        <div>
          <h1 className={styles.header}>{handleRepositoriesNames(name)}</h1>
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
