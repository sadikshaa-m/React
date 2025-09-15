import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function CatIngredients() {
    const {idMeal} = useParams();
     const [data, setData] = useState([]);
          
    
          const getData = async() => {
            try{
            const resp= await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
                params: {i: idMeal}
            })
            setData(resp.data);
            
            }
            catch(err) {
              console.log(err);
            }
            };
          useEffect(() => {
            if (idMeal) getData();
        
          },[idMeal]);
    
  return (
    <div>
      {data.meals &&
        <h1>{data.strMeal}</h1>
      }



    </div>
  )
}
