import React, {useState} from 'react';
import data from "../data/movies.json";
import {Link} from "react-router-dom";
import Glass from "../images/mag-glass.png";

function Card() {
    const [text, setText] = useState("");
    
    const cardToRender = data.filter((movie)=> movie.title.toLowerCase().includes(text.toLowerCase()) || movie.genres.indexOf(text.charAt(0).toUpperCase() + text.slice(1)) >= 0)
    
  return (
    <div className=" bg-black pt-8">
        <div className="container mx-auto flex h-20 lg:h-24">
            <img src={Glass} alt="mgf" className="h-8 lg:h-10 absolute pl-24 lg:pl-96" />
            <input 
            type="text" 
            value={text}
            placeholder="Type title or genre to search a movie!"
            className="container w-1/2 flex mx-auto mb-12 pl-6 md:pl-12 rounded-lg"
            onChange={(event)=>{
                setText(event.target.value);
            }}
            />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 lg:gap-y-12 gap-x-4 lg:gap-x-16 bg-black text-white container mx-auto px-4">
        {cardToRender.map((movie) => (
            <Link to={`/${movie.slug}`} key={movie.title} >
                <img src={movie.imageUrl} alt="card" 
                className="h-full w-full"
                />
                <div className="text-center">{movie.title}</div>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Card