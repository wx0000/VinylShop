import React from "react";
import '../styles/Article.css';

const Article = ({title, author, releaseDate, text, cover}) => {
  return (
    <article className="article">
      <h3>{author}</h3>
      <img src={cover} alt="cdcovers"/>
      <br/>
      <h6>{releaseDate}</h6>
      <span>{title}</span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
