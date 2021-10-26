import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import RepoCard from "../components/RepoCard";

import { Repo } from "../interfaces";

type Props = {
  items: Repo[];
};

const IndexPage = ({ items }: Props) => (
  <Layout>
    {/* {items.map((item) => (
      <RepoCard key={item.id} data={item} />
    ))} */}
  </Layout>
);

// export const getStaticProps: GetStaticProps = async () => {
//   const items: Repo[] = repoList;
//   return { props: { items } };
// };

export default IndexPage;
