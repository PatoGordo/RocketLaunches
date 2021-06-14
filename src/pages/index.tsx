import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cards, Card, CardTitle, CardDate, CardDescription, CardText, CardImage } from "../styles/cards";

function home() {
  const [launches, setLaunches] = useState([]);
  const [news, setNews] = useState([])

  
  useEffect(() => {
    const loadingBar = document.querySelector('#loading')
    loadingBar.classList.add('run')

    axios.get("/api/launches").then((res) => {
      setLaunches(res.data.result.slice(0, 1));
      axios.get('/api/news').then((res) => {
        setNews(res.data.result.slice(0, 1));
        loadingBar.classList.remove('run')
      })
    });
  }, []);

  return (
    <div>
      <div>
        <Cards>
          {
            launches.map((launch, key) => (
              <Card key={key}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: 10, textAlign: 'center', width: '100%' }}>Next launch</h1>
                <CardTitle>{launch.name}</CardTitle>
                <CardDate>
                  {new Date(launch.sort_date * 1000).toLocaleString()} (
                  {Intl.DateTimeFormat().resolvedOptions().timeZone})
                </CardDate>
                <CardDescription>{launch.launch_description}</CardDescription>
                <CardText><strong>Vehicle:</strong> {launch.vehicle.name}</CardText>
                <CardText><strong>Location: </strong> {launch.pad.location.name}, {launch.pad.location.country}</CardText>
                <CardText><strong>Weather</strong><br />Condition: {launch.weather_condition},<br />Temperature: {Math.ceil(launch.weather_temp)} °F,<br />Wind: {launch.weather_wind_mph} Mph.</CardText>
              </Card>
            ))
          }
          {
            news.map((article, key) => (
              <Card key={key}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: 10, textAlign: 'center', width: '100%' }}>Breaking news</h1>
                <CardTitle>{article.title}</CardTitle>
                <CardDate>
                  {new Date(article.publishedAt).toLocaleString()} (
                  {Intl.DateTimeFormat().resolvedOptions().timeZone})
                </CardDate>
                {/* <CardDescription>{article.summary}</CardDescription> */}
                <CardImage src={article.imageUrl} alt="" />
                <a href={article.url} target="blank" style={{ textDecoration: 'none' }}><strong>Know more on {article.newsSite}</strong></a>
              </Card>
            ))
          }
        </Cards>
      </div>
    </div>
  );
}

export default home;