import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #1D2333;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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