import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import utilStyles from "@/styles/utils.module.css";
import styles from "./layout.module.css";

const profileImage = "/images/profile.png";
const name = "Andrey Rannerson Visniewski";
export const siteTitle = "Andrey's Portfolio";

export default function Layout({
  children,
  home,
  blog,
}: {
  children: React.ReactNode;
  home?: true;
  blog?: true;
}) {
  const handleBackToHome = () => {
    if (blog) {
      return (
        <div className={styles.backToHome}>
          <Link href="/blog">← Blog Inicial</Link>
        </div>
      );
    }
    if (!home) {
      return (
        <div className={styles.backToHome}>
          <Link href="/">← Página Inicial</Link>
        </div>
      );
    }
  };

  const handleImageSize = home && (
    <>
      <Image
        priority
        src={profileImage}
        className={styles.imageFit}
        height={144}
        width={144}
        alt={name}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <Head>
        <meta name="blog" content="Pagina inicial do site pessoal" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.imageContainer}>{handleImageSize}</div>
        <h1 className={utilStyles.heading2XL}>{name}</h1>
      </header>
      <main>
        <ScrollToTopButton />
        {children}
      </main>

      {handleBackToHome()}
    </div>
  );
}
