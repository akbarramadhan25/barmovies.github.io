import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardCartoon() {
    const [cartoons, setCartoons] = useState([])
    useEffect(() => {
      async function requestCartoonData() {
        const fetchingData3 =  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=feac9bc1302b39df3d32dc7d62bcdb27&with_genres=16`)
        const parsingData3 = await fetchingData3.json();
        const resultParse = await parsingData3.results
        setCartoons(resultParse)
      }
      requestCartoonData()
    }, [])
  
    return(
      <>
        {cartoons.map( (cartoon) => (
          <div key={cartoon.id} className="bg-slate-200 min-w-[200px] sm:min-w-[180px]">
              <img src={`https://image.tmdb.org/t/p/w500${cartoon.poster_path}`} alt="" className='sm:w-[200px] lg:w-[500px]'/>
              <div className="pt-3 px-3 text-center">
                <h1 className="text-sm md:text-xl font-bold text-center">{cartoon.title}</h1>
                <p className="py-2 text-sm font-semibold text-center">{cartoon.release_date}</p>
                <Link to={`/movie/${cartoon.id}`}  className="text-sm font-semibold text-blue-500 hover:underline text-center pb-2">Kunjungi</Link>
              </div>
            </div>
        ))}
      </>
    )
  }