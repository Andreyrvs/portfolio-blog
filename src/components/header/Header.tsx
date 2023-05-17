import Image from "next/image";
import styles from "@/components/header/header.module.css";
import utilStyles from "@/styles/utils.module.css";

const name = "Andrey 👋🏼";
const profileImage = "/images/profile.png";
const githubIcon = "/images/github-142.svg";
const linkedinIcon = "/images/linkedin-161.svg";

export default function Header() {
  const handleImageSize = (
    <>
      <Image
        priority
        src={profileImage}
        className={styles.imageFit}
        height={150}
        width={150}
        alt={name}
      />
    </>
  );
  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <div>
          <h1 className={utilStyles.heading2XL}>Olá, eu sou {name}</h1>
          <p className={`styles.paragraph`}>
            Sou desenvolvedor Web Fullstack, <br />
            moro em Pinhais - PR
          </p>
        </div>
        <div className={styles.iconsContainer}>
          <a
            href="https://github.com/Andreyrvs"
            target="_blank"
            className={styles.marginZero}
          >
            <Image
              priority
              src={githubIcon}
              className={styles.icons}
              height={25}
              width={25}
              alt="logo github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andreyrv/"
            target="_blank"
            className={styles.marginZero}
          >
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
