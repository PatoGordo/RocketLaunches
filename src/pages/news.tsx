import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cards, Card, CardTitle, CardDate, CardImage } from "../styles/cards";

function news() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadingBar = document.querySelector('#loading')
    loadingBar.classList.add('run')

    axios.get("/api/news").then((res) => {
      setNews(res.data.result);
      loadingBar.classList.remove('run')
    });
  }, []);

  return (
    <div>
      <h1>Astronomy news</h1>
      <Cards>
        {
          news.map((article, key) => (
            <Card key={key}>
              <CardTitle>{article.title}</CardTitle>
              <CardDate>
                {new Date(article.publishedAt).toLocaleString()} (
                {Intl.DateTimeFormat().resolvedOptions().timeZone})
              </CardDate>
              {/* <CardDescription>{article.summary}</CardDescription> */}
              <CardImage src={article.imageUrl} alt="" />
              <a href={article.url} target="blank" style={{textDecoration: 'none'}}><strong>Know more on {article.newsSite}</strong></a>
            </Card>
          ))
        }
      </Cards>
    </div>
  );
}
export default news;