import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import styles from "./layout.module.css";
<link rel="icon" type="image/svg" href="/blog.ico" />;
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

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="/blog.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Andrey R. Visniewski" />
        <meta charSet="utf-8" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <ScrollToTopButton />
          {children}
        </main>
        <>{handleBackToHome()}</>
      </div>
    </>
  );
}
