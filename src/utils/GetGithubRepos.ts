import OctokitAuth from "./FetchOctokit";

const GetGithubRepos = async () => {
  const githubRepos = await OctokitAuth();
  const data = githubRepos.data;
  const regex = /\d+/g;
  const names = data.filter((repo: any) => {
    if (repo.full_name.match(regex)) return repo.full_name;
  });

  console.log(names);

  return names;
};

export default GetGithubRepos;
