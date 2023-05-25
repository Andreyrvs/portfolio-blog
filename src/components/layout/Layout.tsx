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
