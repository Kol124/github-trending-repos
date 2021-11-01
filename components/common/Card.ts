import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0 1rem 3.5rem rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  padding: 1rem;

  h4 {
    text-align: center;
    margin-top: 10px;
  }

  > div {
    display: flex;
    margin-left: 2rem;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: #24292f;
    }

    p {
      font-size: 18px;
      margin: 12px 0;
      color: #aaa;
    }
  }
`;
