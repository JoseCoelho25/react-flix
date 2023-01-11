import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/movies.json";
import MainLayout from '../layouts/MainLayout';

import clock from "../images/clock.png"
import calendar from "../images/calendar.png"

function SingleMoviePage() {
  const params = useParams();
  const slugs = params.slug;

  const movieData = data.find((e)=>e.slug === slugs);

  return (
    <MainLayout>
      <div className="flex bg-black text-white ">
        <img src={movieData.imageUrl} alt="img"  />
        <div>
           <div>{movieData.title}</div>
           <div className="flex h-8">
              <div className="mr-8">{movieData.genres.toString()}</div>
              <div className="flex mr-8">
                <img src={clock} alt="clock"  />
                <div>{movieData.runtime}</div>
              </div>
              <div className="flex">
                <img src={calendar} alt="calendar"  />
                <div>{movieData.releaseDate}</div>
              </div>             
          </div>
          <div>{movieData.description}</div>
          <div>{movieData.director}</div>
          <div>{movieData.writers}</div>
          <div>{movieData.actors}</div>
        </div>
       
      </div>
    </MainLayout>
    
  )
}

export default SingleMoviePage