import React, { useContext } from 'react';
import { FavoritesContext } from './context/FavoriteProvider';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import DropDown from './context/menubar';

const Favpage = () => {
  const { favoritList,setFavoriteList } = useContext(FavoritesContext);

  console.log('Favorite List:', favoritList);
  const navigate = useNavigate();
  function Remove(event, item){
    console.log('weew')
        console.log(favoritList)
        console.log(item.idMeal)
        let CopyFavList= [...favoritList]
        const index= CopyFavList.findIndex(i=> i.idMeal=== item.idMeal)
        if (index !== -1) {
          CopyFavList.splice(index, 1)
          console.log(CopyFavList)
          setFavoriteList(CopyFavList)
          console.log(favoritList)
        }
  }
  const gotoYt = (event, curItem) => {
    console.log('Navigating to video with ID:', curItem.idMeal);
    navigate('/video', { state: { id: curItem.idMeal } });
};
  return (
    <div>
      {/* <div className='upper-fav'><NavLink className="home" to={`/`}><p>Home Page</p></NavLink></div> */}
      <DropDown/>
      <div className='iteminfav'>
          {favoritList.length > 0 ? (
            favoritList.map(item => (
              <div key={item.idMeal} className='container'>
                
                <div className="meal-card cross-container">
                <pre onClick={(event)=>Remove(event, item)} className='iconcross'>❌</pre>
              
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <p>{item.strMeal}</p>

                    <NavLink to={`/${item.idMeal}`}><button>View Recipe</button></NavLink>
                    <button onClick={(event)=> gotoYt(event, item)} className='view-recipe'>Watch Tutorial</button>

              
                </div>
                
              </div>
            ))
          ) : (
            <>
            <DropDown/>
            {/* <p>No favorites added.</p> */}
            <h1 className='warning'>Oops! No Favorites Added 😟</h1>
            </>
          )}
      </div>
    </div>
  );
};

export default Favpage;