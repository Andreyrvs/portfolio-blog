import Layout from "@/components/layout/Layout";
import GetGithubRepos from "@/utils/GetGithubRepos";
import GithubRepo from "@/types/GithubRepo";

function Projetos({ repositories }: any) {
  repositories.map((repo: GithubRepo, index: number) => console.log(repo));

  const handleRepos = repositories.map((repo: GithubRepo, index: number) => (
    <div key={index}>{repo.name}</div>
  ));
  return (
    <Layout>
      <h1>Projetos</h1>
      <div>{handleRepos}</div>
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
