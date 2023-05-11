import { Octokit } from "octokit";

async function OctokitAuth() {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_API_AUTH,
  });

  return await octokit.request("GET /users/{username}/repos?per_page=100", {
    username: "Andreyrvs",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}

export default OctokitAuth;
