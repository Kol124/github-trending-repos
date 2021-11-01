export default interface owner {
  login: string;
  avatar_url: string;
}

export interface Repo {
  id: number;
  name: string;
  owner: owner;
  stargazers_count: number;
  open_issues_count: number;
  description: string;
}
