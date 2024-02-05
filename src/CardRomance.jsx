import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CardRomance() {
    const [romances, setRomances] = useState([])
    useEffect(() => {
      async function requestRomanceData() {
        const fetchingData4 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=feac9bc1302b39df3d32dc7d62bcdb27&with_genres=10749`)
        const parsingData4 = await fetchingData4.json();
        const resultParse2 = await parsingData4.results
        setRomances(resultParse2)
      }
      requestRomanceData()
    }, [])
  
    return(
      <>
        {romances.map( (romance) => (
          <div key={romance.id} className="bg-slate-200 min-w-[200px] sm:min-w-[180px]">
              <img src={`https://image.tmdb.org/t/p/w500${romance.poster_path}`} alt="" className='sm:w-[200px] lg:w-[500px]'/>
              <div className="pt-3 px-3 text-center">
                <h1 className="text-sm md:text-xl font-bold text-center">{romance.title}</h1>
                <p className="py-2 text-sm font-semibold text-center">{romance.release_date}</p>
                <Link to={`/movie/${romance.id}`}  className="text-sm font-semibold text-blue-500 hover:underline text-center pb-2">Kunjungi</Link>
              </div>
            </div>
        ))}
      </>
    )
  }