import styled from "styled-components";

export const Cards = styled.section`
  display: grid;
  place-items: center;
  align-items: stretch;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 775px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 10px;
  border-bottom: 1px solid #aaa;
  margin: 15px 5px;
  width: min(400px, 95%);
`;

export const CardTitle = styled.h2`
  text-align: start;
  font-weight: bolder;
  align-self: start;
`;

export const CardDate = styled.small`
  font-weight: 300;
`;

export const CardDescription = styled.p`
  margin-top: 10px;
`;

export const CardText = styled.p`
  margin-top: 6px;
`

export const CardImage = styled.img`
  margin: 5px 0;
  border-radius: .35rem;
  width: 100%;
`