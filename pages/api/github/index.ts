import { NextApiRequest, NextApiResponse } from "next";
import { Repo } from "../../../interfaces/index";

const gitUrl =
  "https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc";

export default async (req: NextApiRequest, res: NextApiResponse<Repo[]>) => {
  const response = await fetch(gitUrl);
  const data = await response.json();
  // console.log("Data: ", data.items);

  const id = data.items.map((item) => item.id);
  const user = data.items.map((item) => item.owner.login);
  const name = data.items.map((item) => item.name);
  const stars = data.items.map((item) => item.stargazers_count);
  const issues = data.items.map((item) => item.open_issues);
  const avatar_url = data.items.map((item) => item.owner.avatar_url);
  const description = data.items.map((item) => item.description);

  // return res.status(200).json({
  //   id,
  //   user,
  //   name,
  //   stars,
  //   issues,
  //   avatar_url,
  //   description,
  // })
};

// export default fetchRepos;
