import { useState, useEffect } from 'react';
import { RocketSharp } from 'react-ionicons'
import { LaunchCard } from '../styles/cards'

interface PropsTypes {
  company: string;
  vehicleName: string;
  PadName: string;
  PadLocationState: string;
  PadLocationCountry: string;
  LaunchDate?: number;
  MissionName: string;
  MissionDescription: string;
  ttimer?: boolean
}

export default function LaunchCard_(props: PropsTypes) {
  const launchDate: number = Number(new Date(props.LaunchDate * 1000))
  const [remainTime, setRemainTime] = useState(`00:00:00:00`)
  // const [isMetric, setIsMetric] = useState(false)

  // useEffect(() => {
  //   if (localStorage.getItem('RocketLaunches::Measures') === 'metric') {
  //     setIsMetric(true)
  //   }
  // })

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = launchDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setRemainTime(`T-${days < 10 ? '0' : ''}${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)

    if (distance < 0) {
      clearInterval(x);
      setRemainTime(`T-00:00:00:00`)
    }
  }, 1000);

  // function toMetricTemp(fahrenheit: number) {
  //   if (fahrenheit === null) {
  //     return null
  //   } else {
  //     var celsius = (fahrenheit - 32) * 5 / 9
  //     return Math.ceil(celsius)
  //   }
  // }

  // function toMetricSpeed(mph: number) {
  //   if (mph === null) {
  //     return null
  //   } else {
  //     var kmh = mph * 1.609344
  //     return kmh.toFixed(2)
  //   }
  // }

  return (
    <LaunchCard className="card">
      <div className="top">
        <RocketSharp cssClasses="icon" height="30px" width="30px" color="#ffffff" />
        <div>
          <h3>{props.company} · {props.vehicleName}</h3>
          <small>{props.PadName}, {props.PadLocationState !== null ? props.PadLocationState + ', ' : ''} {props.PadLocationCountry}</small>
          <small>{new Date(props.LaunchDate * 1000).toLocaleString('en-us', { timeZoneName: 'short' })}</small>
        </div>
      </div>

      <div className="body">
        <h3 className="TTimer">{remainTime}</h3>
        <div className="launch_details">
          <h3>{props.MissionName}</h3>
          <p>{props.MissionDescription}</p>
        </div>
      </div>
    </LaunchCard>
  )
}