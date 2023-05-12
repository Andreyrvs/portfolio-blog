import Layout from "@/components/layout/Layout";
import GetGithubRepos from "@/utils/GetGithubRepos";
import GithubRepo from "@/types/GithubRepo";
import CardProject from "@/components/cardProject/CardProject";
import styles from "@/components/cardProject/CardProject.module.css";

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
      <h1>Projetos</h1>
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
