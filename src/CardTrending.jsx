/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom"

export default function Card({slicedData}) {
    return (
      <>
        {slicedData.map( (data) => (
          <div key={data.id} className="bg-slate-200 min-w-[200px] sm:min-w-[180px] rounded-sm">
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" className='sm:w-[200px] lg:w-[500px]'/>
            <div className="pt-3 px-3 text-center">
              <h1 className="text-sm md:text-xl font-bold text-center">{data.title}</h1>
              <p className="py-2 text-sm font-semibold text-center">{data.release_date}</p>
              <Link to={`/movie/${data.id}`}  className="text-sm font-semibold text-blue-500 hover:underline text-center pb-2">Kunjungi</Link>
            </div>
          </div>
        ))}
      </>
    )
  }