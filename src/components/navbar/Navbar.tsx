import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <Link href="/">Logo</Link>
        <Link href="/curriculo">Curiculo</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projetos">Projetos</Link>
      </ul>
    </nav>
  );
}
