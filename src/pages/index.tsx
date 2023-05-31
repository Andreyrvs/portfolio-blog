import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { resume } from "@/utils/text";
import Header from "@/components/header/Header";
import styles from "@/styles/home.module.css";
import GetGithubRepos from "@/utils/GetGithubRepos";
import GithubRepo from "@/types/GithubRepo";
import IMG from "@/components/cardProject/IMG";
// import styles2 from "@/components/cardProject/CardProject.module.css";
import styles23 from "@/components/cardProject/Img.module.css";
import handleFiles from "@/lib/mocks";

const siteTitle = "Andrey's Portfolio";
const siteDescription = "Portfolio home page";

type Props = {
  repositories: GithubRepo[];
  imagesMockups: string[];
};

export default function Home({ repositories, imagesMockups }: Props) {
  // const filterRepositories = repositories.filter(
  //   ({ topics }: GithubRepo) => topics && topics.includes("frontend")
  // );

  const isDisplayed = repositories.filter((repo: GithubRepo) =>
    imagesMockups.find((name) => repo.name && name === repo.name)
  );

  const handleRepositories = isDisplayed.map((repo: GithubRepo) => (
    <IMG
      key={repo.id}
      name={repo.name}
      description={repo.description}
      html_url={repo.html_url}
      homepage={repo.homepage}
      src={repo.name}
    />
  ));

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="title" content={siteTitle} />
      </Head>
      <Header />
      <section>
        <p className={styles.paragraph}>{resume}</p>
      </section>
      <section>
        <h1>Projetos 📚</h1>
        <ul className={styles23.cardContainer}>{handleRepositories}</ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const repositories = await GetGithubRepos();
  const imagesMockups = handleFiles();
  return {
    props: {
      repositories,
      imagesMockups,
    },
  };
}
