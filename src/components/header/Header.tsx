import Image from "next/image";
import styles from "@/components/header/header.module.css";
import { Josefin_Sans } from "next/font/google";

const jsosefinSans = Josefin_Sans({
  weight: "700",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const githubIcon2 = "/github-mark.svg";
const linkedinIcon = "/linkedin.svg";
const name = "Olá, Andrey aqui 👋🏼";
const profession = "Desenvolvedor Web Fullstack";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <div className={styles.name_container}>
          <p className={`${jsosefinSans.className} ${styles.name}`}>{name}</p>
        </div>
        <h1 className={`${styles.profession} ${jsosefinSans.className}`}>
          {profession}
        </h1>
        <div className={styles.iconsContainer}>
          <a href="https://github.com/Andreyrvs" target="_blank">
            <Image
              priority
              src={githubIcon2}
              className={styles.icons}
              height={25}
              width={25}
              alt="logo github"
            />
          </a>
          <a href="https://www.linkedin.com/in/andreyrv/" target="_blank">
            <Image
              priority
              src={linkedinIcon}
              className={styles.icons}
              height={25}
              width={25}
              alt="logo linkedin"
            />
          </a>
        </div>
      </section>
    </header>
  );
}
