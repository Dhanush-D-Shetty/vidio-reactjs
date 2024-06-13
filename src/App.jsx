import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData ,setImageURL } from './store/vidioSlice'

const App = () => {
  const dispatch = useDispatch()

  // fetching trendind data from api
  const fetchTrending = async () => {  
    try {
      const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data.results));
      // console.log("Trending respnose = ",response.data.results);
    } catch (error) {
      console.log("error ", error)
    }
  }

  // fetchng the banner image url 
  const fetchConfguration = async function(){
    
      try {
        const response = await axios.get('/configuration');
        dispatch(setImageURL(response.data.images.secure_base_url+"original"))
        // console.log("Configuration respnose = ",response.data.images.secure_base_url+"original");
      } catch (error) {
        console.log("error ", error)
      }
  }

  useEffect(()=>{
    fetchTrending();
    fetchConfguration()
  },[])

  return (
    <main>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  )
}

export default App
