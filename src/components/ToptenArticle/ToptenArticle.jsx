import React from 'react';

// CSS
import './ToptenArticle.scss';

// Components
import ToptenCard from '../cards/ToptenCard/ToptenCard';


function ToptenArticle({ data , cate }) {
  return (
    <section className='topten-article-container'>
    <div className='topten-article-wrap'>
        <h1>10 อันดับบทความ{cate}ยอดยิยม</h1>
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