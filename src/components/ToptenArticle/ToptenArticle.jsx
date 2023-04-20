import React from 'react';

// CSS
import './ToptenArticle.scss';

// Components
import ToptenCard from '../cards/ToptenCard/ToptenCard';


function ToptenArticle({ data }) {
  return (
    <section className='topten-article-container'>
    <div className='topten-article-wrap'>
        <h1>10 อันดับบทความหนังยอดยิยม</h1>
        <div className='topten-article-content-wrap'>
            {data.slice(0 , 10).map((article , index) => {
                return (
                    <React.Fragment key={index}>
                        <ToptenCard article={article} />
                    </React.Fragment>
                )
            })}
        </div>
    </div>
</section>
  );
};

export default ToptenArticle;