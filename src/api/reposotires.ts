import { token } from "../constant";
import { Octokit } from "octokit";

export interface Repositoryes {
    name: string | null | undefined;
    login: string;
    visibility: string;
    fork: boolean;
    forks_url: string;
    description: string | null | undefined;
    language: string | null;
    allow_forking: boolean;
    node_id: string;
    default_branch: string;
    archived: boolean;
  }

async function getRepos(username:string): Promise<Array<Repositoryes>> {
  
    const octokit = new Octokit({ auth: token })
  
    const repo = (await octokit.request("GET /users/{username}/repos/", {
      username: username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      },
    }))
  
    
    /* console.log("repo" , repo.data) */
    return repo.data
    
  
  }
  export {  getRepos }