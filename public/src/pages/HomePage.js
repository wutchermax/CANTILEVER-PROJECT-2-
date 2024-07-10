import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import Filter from '../components/Filter';

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${query}&apiKey=YOUR_NEWSAPI_KEY`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category, query]);

  return (
    <div className="home-page">
      <Filter setCategory={setCategory} setQuery={setQuery} />
      <NewsList articles={articles} />
    </div>
  );
}

export default HomePage;
