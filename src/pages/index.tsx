import * as React from "react";
import axios from "axios";

const { useEffect, useState } = React;

export default function Index() {
  const [data, setData] = useState([]);

  const url: string = "https://api.rocketlaunches.ga/api/launches";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.result.slice(0, 1));
    });
  });

  function showDetails() {
    alert('Coming soon')
  }

  return (
    <div>
      <h2>Next launch</h2>
      {data.map((launch) => (
        <div key={launch.key}>
          <h3>{launch.name}</h3>
          <small>{new Date(launch.sort_date * 1000).toLocaleString()}</small>
          <p>{launch.launch_description}</p>
          <button className="details" onClick={() => {
              showDetails()
            }}>Show details [coming soon]</button>
        </div>
      ))}
      <h2>Breaking news</h2>
    </div>
  );
}
