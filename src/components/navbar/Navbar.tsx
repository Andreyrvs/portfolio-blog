import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.lis}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.lis}>
          <Link href="/curriculum">Currículo</Link>
        </li>
        <li className={styles.lis}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.lis}>
          <Link href="/projects">Projetos</Link>
        </li>
      </ul>
    </nav>
  );
}
