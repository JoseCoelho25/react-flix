import React, {useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import data from "../data/movies.json";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// variavel para criar keys unicas
const keygen = () => Date.now().toString() + Math.random()

function CategoriesPage() {
  //Created a clone of JSON object
  const cloneForLikes = JSON.parse(JSON.stringify(data))
  const cloneForScore = JSON.parse(JSON.stringify(data))

  const [value, setValue] = useState([]);
  const [orderByLikes, setOrderByLikes] = useState([]);
  const array = cloneForScore.sort((a,b) => a.score > b.score ? -1 : 1);
  const orderLikesArray = cloneForLikes.sort((a,b)=> a.likes > b.likes ? -1 : 1);

  useEffect(() => {
    setValue(array.slice(0,7));
    setOrderByLikes(orderLikesArray.slice(0,14));
  }, []);
 
  return (
    <MainLayout>
      <div className="text-white container mx-auto text-2xl lg:text-4xl my-6 lg:my-10 px-4">Highest ranking films!</div>
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-y-20 gap-x-2 lg:gap-x-4 bg-black text-white container mx-auto border-t-2 border-red-700 px-4">
      {value.length === 0 ? <div>Loading...</div> : 
        value.map((movie) => (
            <Link to={`/${movie.slug}`} key={keygen()} >
              <img src={movie.imageUrl} alt="card" 
              className="h-full w-full mt-4"
              />
              <div className="text-center">{movie.title}</div>
            </Link>
        ))
      }
      </div>
      <div className="text-white container mx-auto text-2xl lg:text-4xl my-6 lg:my-10 px-4 pt-20">Most liked films!</div>
        <div className="grid grid-cols-3 lg:grid-cols-7 gap-y-20 gap-x-2 lg:gap-x-4 bg-black text-white container mx-auto border-t-2 border-red-700 px-4">
      {orderByLikes.length === 0 ? <div>Loading...</div> : 
        orderByLikes.map((movie) => (
            <Link to={`/${movie.slug}`} key={keygen()} >
              <img src={movie.imageUrl} alt="card" 
              className="h-full w-full mt-4"
              />
              <div className="text-center">{movie.title}</div>
            </Link>
        ))
      }
      </div>
    </MainLayout>
  )
}

export default CategoriesPage
