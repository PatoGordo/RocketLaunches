import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: grid;
    place-items: center;
    text-align: center;
    background: #f3f1f1;
    color: #1c2020;
    font: 400 1rem Roboto, sans-serif;
  }
  .details {
    background: #25b5c5;
    border: 0;
    border-radius: .45rem;
    padding: 6px 8px;
    color: #fff;
    cursor: pointer;
  }
`;