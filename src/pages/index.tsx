import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cards, Card } from "../styles/cards";
import LaunchCard from '../components/launchcard'
import NewsCard from '../components/newscard'

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
    <div style={{marginTop: '50px'}}>
      <div>
        <Cards>
          {
            launches.map((launch, key) => (
              <Card key={key}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: 10, textAlign: 'center', width: '100%' }}>Next Launch</h1>
                <LaunchCard
                  LaunchDate={launch.sort_date}
                  MissionDescription={launch.launch_description}
                  MissionName={launch.name}
                  PadLocationCountry={launch.pad.location.country}
                  PadLocationState={launch.pad.location.state}
                  PadName={launch.pad.name}
                  company={launch.provider.name}
                  vehicleName={launch.vehicle.name}
                />
              </Card>
            ))
          }
          {
            news.map((article, key) => (
            <Card key={key}>
              <h1 style={{ fontSize: '1.8rem', marginBottom: 10, textAlign: 'center', width: '100%' }}>Breaking news</h1>
              <NewsCard
                website={article.newsSite}
                articleName={article.title}
                articleDescription={article.summary}
                publishedAt={article.publishedAt}
                website_url={article.url}
              />
            </Card>
            ))
          }
        </Cards>
      </div>
    </div>
  );
}

export default home;