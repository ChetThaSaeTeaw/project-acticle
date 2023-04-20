import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "./ArticleCard.scss";

// Icons
import { BsBook } from 'react-icons/bs';


function ArticleCard({ article }) {
  return (
    <Link to={`/${article.linkTo}/${article.id}`} className='article-card-box'>
        <div className='article-card-image'>
          <img src={article.imageUrl} alt="poster-pic" loading='lazy' />
          <span className='article-book-icon'><BsBook /></span>
        </div>
        <div className='article-card-content'>
            <h3>{article.title}</h3>
            <p>{article.date}</p>
            <span>อ่านเพิ่มเติม</span>
        </div>
     </Link>
  );
};

export default ArticleCard;