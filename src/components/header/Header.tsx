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
        height={142}
        width={175}
        alt={name}
      />
    </>
  );
  return (
    <header className={styles.header}>
      <div>
        <h1 className={utilStyles.heading2XL}>Olá, eu sou {name}</h1>
        <p className={styles.paragraph}>
          Sou desenvolvedor web fullstack, <br />
          moro em Pinhais - PR
        </p>
      </div>
      <section className={styles.container}>
        <div className={styles.imageContainer}>{handleImageSize}</div>
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
              height={50}
              width={50}
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
              height={50}
              width={50}
              alt="logo linkedin"
            />
          </a>
        </div>
      </section>
    </header>
  );
}
