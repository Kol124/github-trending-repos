import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  keywords?: string;
  description?: string;
};

const Layout = ({ children, keywords, description, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Header />
    <BodyContainer>{children}</BodyContainer>
  </div>
);

const BodyContainer = styled.div`
  padding: 2.5rem 4rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

Layout.defaultProps = {
  title: "GitHub Trending Repositories",
  description: "GitHub Trending Repositories",
  keywords: "GitHub Trending Repositories, GitHub, APIs, git,",
};

export default Layout;
