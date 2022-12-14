import React from "react";
import Buttons from "./Buttons";
import styled from "styled-components";

export default function Customize() {
  return (
    <Container>
      <Buttons />
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
      text-align: center;
      &:hover {
        h3 {
          display: none;
        }
        p {
          display: none;
        }
        img {
          box-shadow: 0 5px 10px 10px rgb(9, 241, 86);
        }
        .button_container_2 {
          margin-bottom: 2rem;
          display: block;
        }
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
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    input {
      padding: 0.75rem;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
    }
  }
  .button_container_2 {
    display: none;
    flex-direction: row;
    justify-content: center;
  }
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

  /* Paginate */
  .paginateBtn {
    height: 5rem;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    list-style: none;
    text-align: center;
    a {
      color: var(--linkColor);
      margin: 0 auto;
      padding: 0 2rem;
      cursor: pointer;
      &:hover {
        color: var(--linkHover);
      }
    }
  }
  .paginateActive a {
    color: var(--linkHover);
    font-weight: bold;
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
