import styled from "styled-components";

export const LoadingAnimation = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #22272e;
  z-index: 10;
  &.run {
    display: flex !important;
  }
  svg {
    width: 120px;
    margin-bottom: 85px;
  }
  @keyframes blink {50% { color: transparent }}
  .loader__dot { animation: 1s blink infinite }
  .loader__dot:nth-child(2) { animation-delay: 250ms }
  .loader__dot:nth-child(3) { animation-delay: 500ms }
`