import * as React from "react";
import Image from "next/image";
import { Repo } from "../interfaces";
import { HeadlineTwo, Card, Button, Details } from "./common";

type Props = {
  data: Repo;
};

const RepoCard = ({ data }: Props) => (
  <Card>
    <aside>
      <Image
        src={data.owner ? data.owner.avatar_url : "/images/user-img.jpg"}
        alt={data.owner.login}
        width={200}
        height={200}
      />
      <h4>{data.owner.login}</h4>
    </aside>
    <div>
      <HeadlineTwo>{data.name}</HeadlineTwo>
      <p>
        {data.description
          ? data.description
          : "No description available for this repository"}
      </p>
      <Details>
        <Button>Stars: {data.stargazers_count}</Button>
        <Button>Issues: {data.open_issues_count}</Button>
      </Details>
    </div>
  </Card>
);

export default RepoCard;
