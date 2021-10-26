import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { pricingData } from "../utils/sample-data";
import RepoCard from "../components/RepoCard";

import { Pricing } from "../interfaces";

type Props = {
  items: Pricing[];
};

const IndexPage = ({ items }: Props) => (
  <Layout>
    {items.map((item) => (
      <RepoCard key={item.id} data={item} />
    ))}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Pricing[] = pricingData;
  return { props: { items } };
};

export default IndexPage;
