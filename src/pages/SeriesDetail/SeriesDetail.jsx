import React from 'react';
import { useParams } from 'react-router-dom';

// CSS
import "./SeriesDetail.scss";

// Components
import SuggestArticle from '../../components/SuggestArticle/SuggestArticle';

// Data
import articleDetailData from '../../assets/Data/ArticleSeries.json';

function ArticleDetail() {
    
    const { id } = useParams();
    const detailData = articleDetailData.article_series[id];

  return (
    <section className='series-detail-template-container'>
        {!id ? "Loading..." :
            <div className='series-detail-template-wrap'>
                <div className='series-detail-template-wallpaper-box' style={{ background : `url(${detailData.imageUrl})` }}>
                    <h2>{detailData.title}</h2>
                    <h4>ชีวิตจริงโหดร้าย เกมแห่งความตายจึงเป็นความหวัง</h4>
                </div>
                <div className='series-detail-template-detail-box'>
                    <div className='series-detail-template-detail-poster-box'>
                        <img src={detailData.posterUrl} alt="poster-pic" loading='lazy' />
                    </div>
                    <div className='series-detail-template-detail-content-box'>
                        <h2>เกี่ยวกับหนัง</h2>
                        <p>ประเภท : {detailData.type}</p>
                        <p>ผู้กำกับ : {detailData.director}</p>
                        <p>เริ่มฉาย : {detailData.date}</p>
                        <p>ความยาว : {detailData.min}</p>
                    </div>
                </div>
                <div className='series-detail-template-content-box'>
                    <h2>เรื่องย่อ {detailData.title}</h2>
                    <p>{detailData.content_1}</p>
                    <iframe  src={detailData.short_video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h2>รีวิว {detailData.title}</h2>
                    <p>{detailData.content_4}</p>
                    <strong>{detailData.content_5}</strong>
                </div>
                <><SuggestArticle data={articleDetailData.article_series} /></>
            </div>
        }
    </section>
  );
};

export default ArticleDetail;