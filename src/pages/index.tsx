import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { resume } from "@/utils/text";
import Header from "@/components/header/Header";
import styles from "@/styles/home.module.css";
import GetGithubRepos from "@/utils/GetGithubRepos";
import GithubRepo from "@/types/GithubRepo";
import CardProject from "@/components/cardProject/CardProject";
import styles2 from "@/components/cardProject/CardProject.module.css";

const siteTitle = "Andrey's Portfolio";
const siteDescription = "Portfolio home page";

type Props = {
  repositories: GithubRepo[];
};

export default function Home({ repositories }: Props) {
  const filterRepositories = repositories.filter(
    ({ topics }: GithubRepo) => topics && topics.includes("frontend")
  );

  console.log("🔥🔥🔥🔥", filterRepositories);

  const handleRepositories = filterRepositories.map((repo: GithubRepo) => (
    <CardProject
      key={repo.id}
      name={repo.name}
      description={repo.description}
      html_url={repo.html_url}
      homepage={repo.homepage}
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
        <ul className={styles2.cardContainer}>{handleRepositories}</ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const repositories = await GetGithubRepos();
  return {
    props: {
      repositories,
    },
  };
}
