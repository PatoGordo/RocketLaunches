import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cards, Card } from "../styles/cards";
import LaunchCard from '../components/launchcard'

function launches() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const loadingBar = document.querySelector('#loading')
    loadingBar.classList.add('run')

    axios.get("/api/launches").then((res) => {
      setLaunches(res.data.result);
      loadingBar.classList.remove('run')
    });
  }, []);


  return (
    <div style={{marginTop: '50px'}}>
      <h1>Next four launches</h1>
      <Cards>
        {launches.map((launch, key) => {
          return (
            <LaunchCard 
              key={key}
              LaunchDate={launch.sort_date} 
              MissionDescription={launch.launch_description}
              MissionName={launch.name}
              PadLocationCountry={launch.pad.location.country}
              PadLocationState={launch.pad.location.state}
              PadName={launch.pad.name}
              company={launch.provider.name}
              vehicleName={launch.vehicle.name}
            />
          );
        })}
      </Cards>
    </div>
  );
}
export default launches;
