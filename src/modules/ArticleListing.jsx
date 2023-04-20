import React from 'react';
import { useSelector } from 'react-redux';

// Components
import HomeCarousel from '../components/carousels/HomeCaraousel';

function ArticleListing() {

  const { articles } = useSelector(state => state.articles);

  return (
    <>
      <HomeCarousel data={articles} />
    </>
  );
};

export default ArticleListing;