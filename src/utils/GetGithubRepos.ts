import OctokitAuth from "./FetchOctokit";

const GetGithubRepos = async () => {
  try {
    const githubRepos = await OctokitAuth();
    const data = githubRepos.data;
    const regex = /\d+/g;
    const names = data.filter((repo: any) => {
      if (repo.full_name.match(regex)) return repo.full_name;
    });

    return names;
  } catch (error) {
    console.error(error);
  }
};

export default GetGithubRepos;
