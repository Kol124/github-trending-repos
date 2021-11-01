import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import RepoCard from "../components/RepoCard";
import { Repo } from "../interfaces";

type Props = {
  items: Repo[];
};

const IndexPage = ({ items }: Props) => (
  <Layout>
    {items.map((item) => (
      <RepoCard key={item.id} data={item} />
    ))}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const gitUrl =
    "https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc";

  const res = await fetch(gitUrl);
  const data = await res.json();
  const { items } = data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { items },
  };
};

export default IndexPage;
