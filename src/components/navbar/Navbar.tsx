import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.lis}>
          <Link className={styles.text} href="/">
            Home
          </Link>
        </li>
        <li className={styles.lis}>
          <Link className={styles.text} href="/curriculum">
            Currículo
          </Link>
        </li>
        <li className={styles.lis}>
          <Link className={styles.text} href="/blog">
            Blog
          </Link>
        </li>
        <li className={styles.lis}>
          <Link className={styles.text} href="/projects">
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
