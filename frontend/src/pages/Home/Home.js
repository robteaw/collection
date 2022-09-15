import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

export default function Home() {
  return (
    <Container>
      <InnerContainer>
        <Movie />
      </InnerContainer>
    </Container>
  );
}

// styling
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 8rem 12%;
`;

const InnerContainer = styled.div`
  .card_container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 7rem;
    align-items: center;
    justify-content: center;
    .card {
      width: 100%;
      margin: 2rem 0;
      padding: 1rem;
      text-align: center;
      cursor: pointer;
      &:hover {
        background-color: var(--cardHover);
        box-shadow: 0 5px 15px rgb(9, 241, 86);
      }
    }
    h3 {
      color: var(--headColor);
      white-space: nowrap;
    }
    p {
      color: var(--textColor);
      margin-bottom: 1rem;
    }
    img {
      height: 15rem;
      width: 11.5rem;
    }
  }
  .add_data {
    margin: 5rem 0 2rem 0;
    display: flex;
    justify-content: center;
    input {
      padding: 0.75rem;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
    }
  }
  .button_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    button {
      color: var(--btnColor);
      font-size: 1rem;
      font-weight: bold;
      min-width: 3rem;
      margin: 0 0.25rem;
      padding: 0.75rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      &:hover {
        background-color: var(--btnBgHover);
      }
    }
    .add {
      background-color: var(--addBtn);
    }
    .edit {
      background-color: var(--editBtn);
    }
    .delete {
      background-color: var(--deleteBtn);
    }
  }
  // Media Queries
  @media (max-width: 1300px) {
    .card_container {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 4rem;
    }
  }
  @media (max-width: 900px) {
    .add_data {
      flex-direction: column;
      input {
        margin: 0.8rem 0;
      }
      .button_container {
        margin-top: 1rem;
        justify-content: left;
      }
    }
  }
  @media (max-width: 655px) {
    .card_container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
