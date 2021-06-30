import styled from "styled-components";
import { ChevronForwardOutline } from 'react-ionicons'

export const List = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const ListItem_ = styled.li`
  width: min(95%, 460px);
  margin: 10px;
  background: #2d333b;
  border-radius: .35rem;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    > div {
      margin-left: 10px;
      text-align: start;
      flex-direction: column;
      justify-content: center;
    }
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: .65rem;
  }
`

interface ListItemPropsTypes {
  imgUrl: string;
  rocketName: string;
  rocketLaunchDate: string;
}

export function ListItem(props: ListItemPropsTypes) {
  return (
    <ListItem_ className="list-item">
      <div>
        <img src={props.imgUrl} alt="🚀" />
        <div>
          <h4>{props.rocketName}</h4>
          <small>First flight: {props.rocketLaunchDate}</small>
        </div>
      </div>
      <ChevronForwardOutline style={{cursor: 'pointer'}} cssClasses="icon" width="24px" height="24px" color="#ffffff" onClick={() => alert('not working yet')} />
    </ListItem_>
  )
}