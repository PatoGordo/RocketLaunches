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
  #__next {
    width: 100%;
  }
  .screen-size-warn {
    position: fixed;
    width: 100%;
    text-align: center;
    bottom: 80px;
    left: 0;
    display: none;
    background: #2b2f32;
    color: #FFB74D;
    padding: 5px 0;
    opacity: .8;
    &.on {
      display: block;
    }
  }
  .component {
    margin-bottom: 80px;
  }
  body {
    display: grid;
    place-items: center;
    text-align: center;
    background: #22272e;
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
      #bottom-nav, #top-nav {
        background: #24292E !important;
        transition: all ease .3s;
      }
      .list-item {
        background: #cbced2 !important;
        transition: all ease .3s;
      }
      .topbar-menu {
        background: #dae1ea !important;
        transition: all ease .3s;
      }
      .card {
        background: #ffffff;
        border: 1px solid #aaa;
        transition: all ease .3s;
      }
      .top {
        background: #f6f8fa;
        border-bottom: 1px solid #aaa;
        transition: all ease .3s;
      }
      .icon {
        color: #22272e;
        fill: #22272e;
        transition: all ease .3s;
      }
    }
  }
  a {
    color: #1E88E5!important
  }
`;