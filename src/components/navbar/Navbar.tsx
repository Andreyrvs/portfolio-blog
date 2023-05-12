import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <Link href="/curriculo">Curiculo</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/projetos">Projetos</Link>
        </li>
      </ul>
    </nav>
  );
}
