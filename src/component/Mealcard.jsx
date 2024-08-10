
import { NavLink } from 'react-router-dom';
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import Mainpage from './mainpage';
import { FavoritesContext } from './context/FavoriteProvider';


function Mealcard({detail}){
  
    const navigate = useNavigate();
    const { favoritList, setFavoriteList } = useContext(FavoritesContext);


    
    const isFavorite = (item) => favoritList.some(favItem => favItem.idMeal === item.idMeal);

  function handleClickIcon(event, currentitem) {
    let updatedFavoriteList;
    
    if (isFavorite(currentitem)) {
      updatedFavoriteList = favoritList.filter(item => item.idMeal !== currentitem.idMeal);
    } else {
      updatedFavoriteList = [...favoritList, currentitem];
    }
    setFavoriteList(updatedFavoriteList);
  }
  const gotoYt = (event, curItem) => {
    console.log('Navigating to video with ID:', curItem.idMeal);
    navigate('/video', { state: { id: curItem.idMeal } });
};
  return (
    <>
    {/* <button onClick={gotoFav}>Go To Favorite</button> */}
    <div className='meals'>
      {!detail ? "No Results" : detail.map((curItem) => {
        return (
          <div key={curItem.idMeal} id="container">
            <div className="meal-card">
            <i onClick={(event)=>handleClickIcon(event, curItem)} className={`icon bx ${isFavorite(curItem) ? 'bxs-heart' : 'bx-heart'}`}></i>
            {/* <i class='bx bxl-youtube icon-yt'></i>  */}
              <img src={curItem.strMealThumb} alt={curItem.strMeal} />
              <p>{curItem.strMeal}</p>
              <button onClick={(event)=> gotoYt(event, curItem)} className='view-recipe'>Watch Tutorial</button>
              <NavLink to={`/${curItem.idMeal}`}><button className='view-recipe'>View Recipe</button></NavLink>
              
            </div>
          </div>
        );
      })}
    </div>
    </>
  )
}

export default Mealcard
