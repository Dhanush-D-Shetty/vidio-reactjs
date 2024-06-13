import React, { useEffect, useState } from 'react'
import HomeBanner from '../components/HomeBanner'
import { useSelector } from 'react-redux'
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import axios from 'axios';
import useFetch from '../hooks/useFetch';

const HomePage = () => {

  const trending = useSelector(state => state.vidioData.bannerData);
    const{data:nowPlaying}= useFetch('/movie/now_playing')
    const{data:discoverMovie}= useFetch('discover/movie')
    const{data:discoverTv}= useFetch('discover/tv')
    const{data:upcomingMovie}= useFetch('movie/upcoming')
    const{data:topRatedTvSeries}= useFetch('tv/top_rated')
    const{data:tvOnTheAir}= useFetch('/tv/on_the_air')


  return (
    <div>
      <HomeBanner />
      <HorizontalScrollbar heading="Trending" data={trending} istrending={true} />
      <HorizontalScrollbar heading="Now Playing" data={nowPlaying}   media_Type="movie"/>
      <HorizontalScrollbar heading="discoverMovie" data={discoverMovie} media_Type="movie"  />
      <HorizontalScrollbar heading="discoverTv" data={discoverTv} media_Type="tv" />
      <HorizontalScrollbar heading="upcomingMovie" data={upcomingMovie} media_Type="movie"/>
      <HorizontalScrollbar heading="topRatedTvSeries" data={topRatedTvSeries} media_Type="tv"/>
      <HorizontalScrollbar heading="On The Air Tv Show" data={tvOnTheAir} media_Type="tv"/>
    </div>
  )
}

export default HomePage
