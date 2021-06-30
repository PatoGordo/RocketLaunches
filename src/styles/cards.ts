import styled from "styled-components";

export const LaunchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  background: #2d333b;
  border-radius: 8px;
  margin: 15px;
  .top {
    width: 100%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    background: #48515c;
    border-radius: 8px 8px 0 0;
    .icon {
      display: flex;
      align-items: center;
      margin: 0 20px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: start;
    }
  }
  .body {
    padding: 10px;
    .TTimer {
      text-align: center;
      font-family: 'Roboto Slab', serif;
      font-size: 25px;
      font-weight: 500;
      border-bottom: 1px solid #aaa;
      margin-bottom: 15px;
    }
    .launch_details {
      h3 {
        font-weight: 500;
        font-size: 18px;
      }
      p {
        font-weight: 300;
        font-size: 14px;
      }
    }
  }
`
export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: start;
  background: #2d333b;
  border-radius: 8px;
  margin: 15px;
  .top {
    width: 100%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    background: #48515c;
    border-radius: 8px 8px 0 0;
    align-self: flex-start;
    .icon {
      display: flex;
      align-items: center;
      margin: 0 20px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: start;
    }
  }
  .body {
    padding: 10px;
    .article_details {
      h3 {
        font-weight: 500;
        font-size: 18px;
      }
      p {
        font-weight: 300;
        font-size: 14px;
      }
      a {
        color: #00E676;
      }
    }
  }
`

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