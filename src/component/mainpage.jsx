import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import Mealcard from './Mealcard'
import { FavoritesContext } from './context/FavoriteProvider'
import * as Menubar from'@radix-ui/react-dropdown-menu'
import DropDown from './context/menubar'


const Mainpage = () => {
  const { favoritList, setFavoriteList } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const [datafound, setDatafound]= useState(true)
  const  [isLoading, setIsLoading]= useState(true)
  const [dataArray, setDataArray]= useState([])
  const [search, setSearch]= useState(`A`)
  const API= `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
  

    const fetchApiData= async (url) => {
      try{
          const response= await fetch(url);
          const data= await response.json();
          setDataArray(data.meals)
          data.meals===null ? setDatafound(false): setDatafound(true);
          setIsLoading(false)
          
          return(data)
      } catch(error){
          console.log(error)
      }
  }
  useEffect(()=>{
      fetchApiData(API)
  },[])
  if(isLoading){
      return <>
      <h1>Loading....</h1>
      </>
  }
  const gotoFav= ()=>{
    {
      navigate('/favorite', { state: { favoritList } });
    }
  }
  


  const searchValue= (event)=>{
    setSearch(event.target.value)
  }
  return (
    <>
    
    <div className='container'>
      <div className="searchBar"> 
        {/* <Menubar.Root>
          <Menubar.Trigger>Open</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content>
              <div>Heello</div>
              <button>Ghy</button><button>hbnj</button>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Root> */}
        <DropDown/>
        
        <input type="text" placeholder="Search...." onChange={searchValue}/>
        <button onClick={()=>fetchApiData(API)} className='search button1'>Search</button>
        {/* <button onClick={gotoFav} className='button2'>Go To Favorite</button> */}
      </div>
      

      <div>
          <Mealcard detail={dataArray}/>
      </div>
      
      
    </div>
    <br/>
    <hr />
    <footer className='footer'>Hello</footer>
    </>
  )
}

export default Mainpage
