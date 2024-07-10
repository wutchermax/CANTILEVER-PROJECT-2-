import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="card">
      <img src={article.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a href={article.url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
}

export default NewsCard;
