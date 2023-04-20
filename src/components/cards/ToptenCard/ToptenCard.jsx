import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './ToptenCard.scss';

// Icons
import { BsClock , BsEye } from 'react-icons/bs';

function ToptenCard({ article }) {

  return (
    <Link to={`/${article.linkTo}/${article.id}`} className='topten-card-component-box'>
        <div className='topten-card-image-box'>
            <img src={article.imageUrl} alt="example-pic" loading='lazy' />
        </div>
        <div className='topten-card-content-box'>
            <strong>{article.title}</strong>
            <p>{article.type}</p>
            <div className='topten-card-date-box'>
                <span><BsClock /></span>
                <p>{article.date}</p>
                <span><BsEye /></span>
                <p>555</p>
            </div>
        </div>
    </Link>
  );
};

export default ToptenCard;