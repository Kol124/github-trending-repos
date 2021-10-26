import Image from "next/image";
import styled from "styled-components";
import { HeadlineThree } from "./common";

const Header = () => {
  return (
    <Nav>
      <HeadlineThree>Trending Repositories</HeadlineThree>
    </Nav>
  );
};

const Nav = styled.nav`
  text-align: center;
  padding: 1.5rem;
  background: #24292f;

  > h3 {
    color: #fff;
  }
`;

export default Header;
