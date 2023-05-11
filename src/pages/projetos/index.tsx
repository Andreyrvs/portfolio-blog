import Layout from "@/components/layout/Layout";
import GetGithubRepos from "@/utils/GetGithubRepos";
import GithubRepo from "@/types/GithubRepo";
import CardProject from "@/components/CardProject/CardProject";
import styles from "@/components/CardProject/CardProject.module.css";

function Projetos({ repositories }: any) {
  const handleRepos = repositories.map((repo: GithubRepo, index: number) => (
    <CardProject
      key={index}
      name={repo.name}
      description={repo.description}
      html_url={repo.html_url}
    />
  ));
  return (
    <Layout>
      <h1>Projetos</h1>
      <div className={styles.card}>{handleRepos}</div>
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
