import React , { useState , useEffect } from 'react';
import { APIKey } from '../../api/ApiKey';
import MovieApi from '../../api/MovieApi';
import { addArticle } from '../../stores/Reducer';
import { useDispatch } from 'react-redux';

// CSS
import "./Home.scss";

// Data
import articleData from '../../assets/Data/ArticleMovies.json';

// Components
import ArticleListing from '../../modules/ArticleListing';
import ArticleCard from '../../components/cards/ArticleCard/ArticleCard';
import ToptenArticle from '../../components/ToptenArticle/ToptenArticle';

function Home() {

  const [ showCards , setShowCards ] = useState(6);
  const dispatch = useDispatch();

  // Fetch Data
  const fetchData = async () => {
    const searchKey = "thor"
    let response = await MovieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`);
  
    if (!response.data) {
      console.log("Fetch Data Error!");
    } else {
      setTimeout(() => {
          dispatch(addArticle(response.data.Search))
      },500);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <section className='home-page-container'>
      <div className='home-page-wrap'>
        <div className='home-page-carousel-box'>
          <ArticleListing />
        </div>
        <h1>รีวิวหนังใหม่</h1>
        <p>เว็บรีวิวหนัง รีวิวหนังใหม่ ตัวอย่างหนัง อัพเดทรีวิวหนังใหม่ ปี 2022</p>
        <div className='home-page-article-card-wrap'>
            <div className='home-page-article-card-box'>
              {articleData.article_movies.slice(0 , showCards).map((article , index) => {
                return (
                  <React.Fragment key={index}>
                      <ArticleCard article={article} />
                  </React.Fragment>
                )
              })}
            </div>
            <button 
              className="readmore-button" 
              type="submit" 
              onClick={() => setShowCards(next => next + 3)}
              >
              {showCards < articleData.article_movies.length ? "แสดงเพิ่มเติม" : "แสดงทั้งหมดแล้ว" }
            </button>
        </div>
        <><ToptenArticle data={articleData.article_movies} /></>
      </div>
    </section>
  )
}

export default Home;