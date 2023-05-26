import Layout from "@/components/layout/Layout";
import GetGithubRepos from "@/utils/GetGithubRepos";
import GithubRepo from "@/types/GithubRepo";
import CardProject from "@/components/cardProject/CardProject";
import Head from "next/head";
import styles from "@/components/cardProject/CardProject.module.css";

const siteTitle = "Andrey's Projects";

function Projetos({ repositories }: any) {
  const handleRepositories = repositories.map(
    (repo: GithubRepo, index: number) => (
      <CardProject
        key={index}
        name={repo.name}
        description={repo.description}
        html_url={repo.html_url}
        homepage={repo.homepage}
      />
    )
  );

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content="Page of projects" />
      </Head>
      <h1>Projetos 📚</h1>
      <ul className={styles.cardContainer}>{handleRepositories}</ul>
    </Layout>
  );
}

export default Projetos;

export async function getStaticProps() {
  const repositories = await GetGithubRepos();
  return {
    props: {
      repositories,
    },
  };
}
