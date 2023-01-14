import React, {useState} from 'react'
import MainLayout from '../layouts/MainLayout'
import data from "../data/movies.json";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CategoriesPage() {
  //Created a clone of JSON object
  const clone = JSON.parse(JSON.stringify(data))

  const [value, setValue] = useState([]);
  const [orderByLikes, setOrderByLikes] = useState([]);
  const array = data.sort((a,b) => a.score > b.score ? -1 : 1);
  const orderLikesArray = clone.sort((a,b)=> a.likes > b.likes ? -1 : 1);

  useEffect(() => {
    setValue(array.slice(0,7));
    setOrderByLikes(orderLikesArray.slice(0,7));
  }, []);
 
  return (
    <MainLayout>
      <div className="text-white container mx-auto text-4xl my-10">Highest ranking films!</div>
      <div className="grid grid-cols-7 grid-rows-1 gap-y-20 gap-x-16 bg-black text-white container mx-auto">
      {value.length === 0 ? <div>Loading...</div> : 
        value.map((movie) => (
            <Link to={`/${movie.slug}`} key={movie.title} >
              <img src={movie.imageUrl} alt="card" 
              className="h-full w-full"
              />
              <div className="text-center">{movie.title}</div>
            </Link>
        ))
      }
      </div>
      <div className="text-white container mx-auto text-4xl my-10">Most liked films!</div>
        <div className="grid grid-cols-7 grid-rows-1 gap-y-20 gap-x-16 bg-black text-white container mx-auto">
      {orderByLikes.length === 0 ? <div>Loading...</div> : 
        orderByLikes.map((movie) => (
            <Link to={`/${movie.slug}`} key={movie.title} >
              <img src={movie.imageUrl} alt="card" 
              className="h-full w-full"
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
