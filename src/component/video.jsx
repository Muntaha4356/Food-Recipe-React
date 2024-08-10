import React, {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player'

const Video = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const API= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  const [isLoading, setIsLoading]= useState(false)
  const [ytlink, setYtlink]= useState(``)

  const fetchApiData= async (url) => {
    try{
        const response= await fetch(url);
        const data= await response.json();
        console.log('weew')
        // console.log(data.meals[0].strYoutube)
        setYtlink(data.meals[0].strYoutube)
        setIsLoading(false)
        
        return(data)
    } catch(error){
        console.log(error)
    }}


useEffect(()=>{
    fetchApiData(API)
},[])
if(isLoading){
    return <>
    <h1>Loading....</h1>
    </>
}

  return (
    <div>
      <div className='upper-fav'><NavLink className="home" to={`/`}><p>Home Page</p></NavLink></div>
      {/* Use the ID to fetch or display the YouTube video */}
      <div className="yt-video"><ReactPlayer url={ytlink}/></div>
      
    </div>
  );
};

export default Video;

