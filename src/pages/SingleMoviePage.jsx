import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/movies.json";
import MainLayout from '../layouts/MainLayout';

import clock from "../images/clock.png"
import calendar from "../images/calendar.png"

function SingleMoviePage() {
  const params = useParams();
  const slugs = params.slug;

  const movieData = data.find((e)=>e.slug === slugs);

  let test = movieData.ratings
  console.log(test.length)
  const x = movieData.ratings[test.length]
  console.log(x)
  const hasVideoId = movieData.youTubeTrailerId !== null;

  return (
    <MainLayout>
      {/* description section */}
      <div className="flex bg-black text-white m-16">
        <img src={movieData.imageUrl} alt="img" className="h-96" />
        <div className="ml-8 ">
           <div className="text-3xl font-bold">{movieData.title}</div>
           <div className="flex h-8 pt-2 mb-4">
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
          <div className="text-xl text-gray-400">{movieData.description}</div>
          <div className="flex w-2/3 mt-6">
            <div className="mr-8">
              <div className="text-gray-400">Director</div>
              <div>{movieData.director}</div>
            </div>
            <div>
              <div className="text-gray-400">Cast</div>
              <div>{movieData.actors}</div>
            </div> 
          </div>
        </div>
      </div>
      {/* film section */}
      <div className="flex">
        <div></div>
        <div></div>
      </div>
      {/* trailer section */}
      {hasVideoId && (
        <div className="container mx-auto w-3/4 h-screen">
          <iframe
          className="w-full h-full"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movieData.youTubeTrailerId}`}
            title={movieData.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a href={`https://www.youtube.com/watch?v=${movieData.youTubeTrailerId}`} target="_blank" rel='noreferrer'>
            Ver o video no youtube
          </a>
        </div>
      )}
      {!hasVideoId && <div className="text-white text-2xl ml-16 mb-10">Nao existe trailer disponivel!</div>}
       
    </MainLayout>
    
  )
}

export default SingleMoviePage