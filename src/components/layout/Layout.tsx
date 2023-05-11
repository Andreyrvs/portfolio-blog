import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "@/styles/utils.module.css";
import styles from "./layout.module.css";
import Navbar from "@/components/navbar/Navbar";

const profileImage = "/images/profile.png";
const name = "Andrey Rannerson Visniewski";
export const siteTitle = "Andreys Blog";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: true;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="blog" content="Pagina inicial do site pessoal" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navbar />
      <header className={styles.header}>
        {home && (
          <>
            <Image
              priority
              src={profileImage}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Página Inicial</Link>
        </div>
      )}
    </div>
  );
}
