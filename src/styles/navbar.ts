import styled from "styled-components";

export const TopMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #252c35;
  padding-top: 65px;
  z-index: 9;
  overflow-y: auto;
  transform: translateX(-100%);
  footer {
    margin: 10px 0;
  }
  &.on {
    transition: all ease .3s;
    animation: slide-right .4s linear both;
  }
  // Open animation
  @keyframes slide-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  // Close animation
  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

export const BottomBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #2d333b;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const TopBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background: #2d333b;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  div {
    display: flex;
    align-items: center;
    margin: 0 16px;
    h2 {
      font-weight: 500;
    }
    h2, .config {
      margin-left: 16px;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease .3s;
  a {
    color: #fff !important;
    font-size: .75rem;
    text-decoration: none;
  }
  &.active {
    a, svg {
      color: #42b883 !important;
      fill: #42b883 !important;
    }
  }
  &:hover {
    transition: all ease .3s;
    svg, a {
      color: #42b883 !important;
      fill: #42b883 !important;
    }
  }
`