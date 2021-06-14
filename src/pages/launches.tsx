import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cards, Card, CardTitle, CardDate, CardDescription, CardText } from "../styles/cards";

function launches() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    axios.get("/api/launches").then((res) => {
      setLaunches(res.data.result);
    });
  }, []);

  return (
    <div>
      <h1>Next four launches</h1>
      <Cards>
        {launches.map((launch, key) => {
          return (
            <Card key={key}>
              <CardTitle>{launch.name}</CardTitle>
              <CardDate>
                {new Date(launch.sort_date * 1000).toLocaleString()} (
                {Intl.DateTimeFormat().resolvedOptions().timeZone})
              </CardDate>
              <CardDescription>{launch.launch_description}</CardDescription>
              <CardText><strong>Vehicle:</strong> {launch.vehicle.name}</CardText>
              <CardText><strong>Location: </strong> {launch.pad.location.name}, {launch.pad.location.country}</CardText>
              {/* <CardText><strong>Weather</strong><br />Condition: {launch.weather_condition},<br />Temperature: {Math.ceil(launch.weather_temp)} °F,<br />Wind: {launch.weather_wind_mph} Mph.</CardText> */}
            </Card>
          );
        })}
      </Cards>
    </div>
  );
}
export default launches;
