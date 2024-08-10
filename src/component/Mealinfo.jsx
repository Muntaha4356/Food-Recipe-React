import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Mealinfo = () => {
    const {mealid}= useParams()
    // let ingredients= []
    let extractedIngredients= []
    const [type, setType]= useState('')
    const[cooking, setCooking]= useState('Method To Cook')
    
    const [dishname, setDishname]= useState('loading...')
    const [image, setImage]= useState()
    const [isLoading, setIsLoading]= useState(false)
    const [mealArray, setMealArray]= useState([])
    const [ingredientsArray, setIngredientsArray] = useState([]);
    // const [measure, setMeasure]= useState([])
    const API= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
  
      const fetchApiData= async (url) => {
        try{
            const response= await fetch(url);
            const data= await response.json();
            console.log(data.meals[0]);
            setMealArray(data.meals[0]);
            setType(data.meals[0].strCategory)
            setDishname(data.meals[0].strMeal)
            setImage(data.meals[0].strMealThumb)
            setCooking(data.meals[0].strInstructions)
            console.log(data.meals[0].strIngredient6)
            console.log(mealArray)
            
            for (let i = 1; i <= 20; i++) {
              const ingredient = data.meals[0][`strIngredient${i}`];
              const measure = data.meals[0][`strMeasure${i}`]
              if (ingredient && ingredient.trim()) {
                extractedIngredients.push({ingredient,measure});
              }
            }
            
            console.log(extractedIngredients)
            setIngredientsArray(extractedIngredients)
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
  return (
    <div className='meal-info'>
      <div className='upper-meal'><NavLink className="home1" to={`/`}><p>Home Page</p></NavLink></div>
      <div className="ingred-container">
        <div className="ingred-imag">
            <img src={image} alt="photo" />
        </div>
        <div className="ingred-recipe">
            <h1>{dishname}</h1>
            <p>{type}</p>
            <ul>
            {ingredientsArray.map((item, index) => (
              <li key={index}>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>
        </div>
        <div className="cooking">

           <h1>Instruction</h1> 
           <p>{cooking}</p>
        </div>
      </div>
    </div>
  )
}

export default Mealinfo
