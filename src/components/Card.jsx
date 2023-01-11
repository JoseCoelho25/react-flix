import React, {useState} from 'react';
import data from "../data/movies.json";

function Card() {
    const [text, setText] = useState("");

    const x = data.map((movie)=> movie.genres);
    console.log(x)

    const cardToRender = data.filter((movie)=> movie.title.toLowerCase().includes(text.toLowerCase()))
    
  return (
    <div className=" bg-black pt-8">
        <input 
        type="text" 
        value={text}
        placeholder="Type here to search movies!"
        className="container w-1/2 flex mx-auto mb-12"
        onChange={(event)=>{
            setText(event.target.value);
        }}
        />
        <div className="grid grid-cols-4 gap-y-12 gap-x-16 bg-black text-white container mx-auto">
        {cardToRender.map((movie) => (
            <div key={movie.title} >
                <img src={movie.imageUrl} alt="card" 
                className="h-full w-full"
                />
                <div className="text-center">{movie.title}</div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Card