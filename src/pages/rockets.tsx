import { List, ListItem } from '../styles/rockets-page'
import vehicles from '../data/vehicles'

function rockets() {
  return (
    <div style={{marginTop: '50px'}}>
      <h1>Rockets</h1>
      <List>
        {
          vehicles.map((vehicle, key) => (
            <ListItem key={key} imgUrl={vehicle.img} rocketLaunchDate={vehicle.first_launch} rocketName={vehicle.name} />
          ))
        }
      </List>
    </div>
  )
}
export default rockets