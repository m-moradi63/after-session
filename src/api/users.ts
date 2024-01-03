import { Octokit } from "octokit";
import { token } from "../constant";

export interface User {
  avatar_url: string | undefined;
  name: string | null;
  company: string | null;
  blog: string | null;
  bio: string | null;
  followers: number;
  following: number;
  login: string;
  location: string;
  twitter_username: string;
}



async function getUser(username: string): Promise<User> {
  const octokit = new Octokit({ auth: token });

  const old = await octokit.request("GET /users/{username}/", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  console.log("contributes", old.data);
  return old.data;
}

export { getUser };
