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


  // video check
  const hasVideoId = movieData.youTubeTrailerId !== null;

  return (
    <MainLayout>
      {/* description section */}
      <div className="block lg:flex bg-black text-white lg:m-16 m-10">
        <img src={movieData.imageUrl} alt="img" className="h-1/2 lg:h-96 mb-6 lg:mb-0" />
        <div className="lg:ml-8">
           <div className="text-3xl font-bold">{movieData.title}</div>
           <div className="flex h-8 pt-2 mb-6 lg:mb-4 ">
              <div className="mr-2 lg:mr-8">{movieData.genres.toString()}</div>
              <div className="flex mr-2 lg:mr-8">
                <img src={clock} alt="clock"  />
                <div className="">{movieData.runtime}</div>
              </div>
              <div className="flex">
                <img src={calendar} alt="calendar"  />
                <div>{movieData.releaseDate}</div>
              </div>
          </div>
          <div className="text-xl text-gray-400">{movieData.description}</div>
          <div className="flex w-full mt-6">
            <div className="">
              <div className="text-gray-400">Director</div>
              <div>{movieData.director}</div>
            </div>
            <div className="ml-4 lg:ml-12">
              <div className="text-gray-400">Cast</div>
              <div>{movieData.actors}</div>
            </div>
          </div>
        </div>
      </div>
      {/* film section */}
      <div className="block lg:flex container mx-auto px-4 lg:px-0 lg:m-16 bg-gradient-to-r from-slate-900  to-gray-800 rounded-l p-2 w-full">
      {movieData.ratings.map((movie)=>(
        <div className=" text-white grid grid-cols-2 lg:grid-cols-2 w-full lg:w-1/4 text-center lg:ml-4 ">
          <div className="py-4">{movie.source}</div>
          <div className="font-bold py-4">🌟{movie.value}</div>
        </div>
      ))}
        <input type="button" value="VER FILME" className="text-red-900 font-bold text-6xl flex w-full justify-center pb-2" />
      </div>
      {/* trailer section */}
      {hasVideoId && (
        <div className="container mx-auto w-3/4 h-full lg:h-screen mt-12 lg:mt-0">
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
      {!hasVideoId && <div className="text-white text-2xl mt-8 lg:mt-0 lg:ml-16 text-center lg:text-start mb-10">Nao existe trailer disponivel!</div>}

    </MainLayout>

  )
}

export default SingleMoviePage