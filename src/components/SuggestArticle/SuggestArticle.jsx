import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import "./SuggestArticle.scss";

// Data
import articleData from '../../assets/Data/ArticleMovies.json';

function SuggestArticle({ data }) {
  return (
    <section className='suggest-article-container'>
        <div className='suggest-article-wrap'>
            <h1>บทความแนะนำ</h1>
            <div className='suggest-article-content-wrap'>
                {data.slice(0 , 6).map((article , index) => {
                    return (
                        <Link to={`/${article.linkTo}/${article.id}`} className='suggest-article-content-box' key={index}>
                            <div>
                                <img src={article.imageUrl} alt="poster-pic" loading='lazy' />
                            </div>
                            <p>{article.title}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    </section>
  );
};

export default SuggestArticle;