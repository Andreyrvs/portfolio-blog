import Image from "next/image";
import styles from "@/components/header/header.module.css";
import utilStyles from "@/styles/utils.module.css";
import React, { useEffect } from "react";

const name = "Andrey 👋🏼";
const profileImage = "/images/profile.png";
const githubIcon = "/images/github-142.svg";
const githubIcon2 = "/github-mark.svg";
const githubIcon23 = "/GitHub_Logo.png";
const linkedinIcon = "/images/linkedin-161.svg";
const linkedin = "/linkedin.svg";

export default function Header() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                priority
                src={githubIcon2}
                className={styles.icons}
                height={25}
                width={25}
                alt="logo github"
              />
              <Image
                priority
                src={githubIcon23}
                className={styles.icons}
                height={40}
                width={100}
                alt="logo github"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/andreyrv/"
            target="_blank"
            className={styles.marginZero}
          >
            {/* <Image
              priority
              src={linkedinIcon}
              className={styles.icons}
              height={25}
              width={25}
              alt="logo linkedin"
            /> */}
            <Image
              priority
              src={linkedin}
              className={styles.icons}
              height={50}
              width={125}
              alt="logo linkedin"
            />
          </a>

          {/* <div
            className="badge-base LI-profile-badge"
            data-locale="pt_BR"
            data-size="small"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="andreyrv"
            data-version="v1"
          ></div> */}
        </div>
      </section>
    </header>
  );
}
