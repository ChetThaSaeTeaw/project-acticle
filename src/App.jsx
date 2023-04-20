import { useState , Suspense , lazy } from 'react'
import { Routes , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './stores/Store';

// CSS
import './App.scss'

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


// Pages
const HomePage = lazy(() => import("./pages/Home/Home"));
const ArticleDetailPage = lazy(() =>import("./pages/ArticleDetail/ArticleDetail"));
const SeriesPage = lazy(() => import("./pages/Series/Series"));
const SeriesDetailPage = lazy(() => import("./pages/SeriesDetail/SeriesDetail"));
const NetflixPage = lazy(() => import("./pages/Netflix/Netflix"));
const NetfilxDetailPage = lazy(() => import("./pages/NetflixDetail/NetflixDetail"));
const AnimePage = lazy(() => import("./pages/Anime/Anime"));
const AnimeDetailPage = lazy(() => import("./pages/AnimeDetail/AnimeDetail"));

function App() {

  return (
    <Suspense fallback="Loading...">
        <Provider store={Store}>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/moviedetail/:id' element={<ArticleDetailPage />} />
              <Route path='/series' element={<SeriesPage />} />
              <Route path='/seriesdetail/:id' element={<SeriesDetailPage />} />
              <Route path='/netflix'element={<NetflixPage />} />
              <Route path='/netflixdetail/:id' element={<NetfilxDetailPage />} />
              <Route path='/anime' element={<AnimePage />} />
              <Route path='/animedetail/:id' element={<AnimeDetailPage />} />
            </Routes>
          </div>
          <Footer />
        </Provider>
    </Suspense>
  )
}

export default App
