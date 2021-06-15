import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat, 'sans-serif';
    ::-webkit-scrollbar {
      visibility: 0;
      display: none;
    }
  }
  .component {
    margin-bottom: 80px;
  }
  body {
    display: grid;
    place-items: center;
    text-align: center;
    background: #171d2d;
    color: #e1e2e4;
    transition: all ease .3s;
    &.light {
      background: #fff !important;
      color: #24292e !important;
      transition: all ease .3s;
      #loading {
        background: #f3fbff !important;
        transition: all ease .3s;
      }
      #navbar {
        background: #24292E !important;
        transition: all ease .3s;
      }
    }
  }
  a {
    color: #1E88E5!important
  }
`;