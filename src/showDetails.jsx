import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Footer from './Footer';

export default function Movie() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        const requestDetail = async () => {
            try {
                const fetchingDetail = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=feac9bc1302b39df3d32dc7d62bcdb27&append_to_response=credits,videos`);
                const parseFetchDetail = await fetchingDetail.json()
                setMovieDetails(parseFetchDetail)
            }catch(e) {
                console.log('Gagal', e)
            }
        }
        requestDetail()
    },[id])

    
    if(!movieDetails) {
        return <div className='flex justify-center items-center  min-h-screen bg-slate-800 text-orange-500'>Memuat...</div>
    }

    const image = `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
    const nameGenre = movieDetails.genres.map((genre) => genre.name)
    const gapName = nameGenre.join(', ')
    const actors = movieDetails.credits.cast.slice(0,7)
    const crews = movieDetails.credits.crew.slice(0,7)
    const video_key = movieDetails.videos.results[0].key
  
    function Actors() {
        return (
            <>
                {actors.map((e) => (
                    <div key={e.id} className='p-4 max-width-[100px] text-wrap'>
                        <img src={`https://image.tmdb.org/t/p/w154${e.profile_path}`} alt="" className='opacity-80' />
                        <h2 className='text-xl opacity-80 text-white font-medium py-2'>{e.name}</h2>
                        <p className='text-sm opacity-80 text-white text-wrap'>Karakter : {e.character}</p>
                    </div>
                ))}
            </>
        )
    }

    function Crew() {
        return (
            <>
                {crews.map( e => (
                    <div key={e.credit_id} className='p-4 '>
                        <img src={`https://image.tmdb.org/t/p/154${e.profile_path}`} alt="" className='opacity-80' />
                        <h2 className='text-xl opacity-80 text-white font-medium py-2'>{e.name}</h2>
                        <p className='text-sm opacity-80 text-white text-wrap'>{e.job}</p>
                    </div>
                ))}
            </>
        )
    } 

    return(
        <>
            <div className='bg-slate-950 relative max-h-[7000px] pb-3'>
            <div className='ucok max-w-full min-h-[145vh] bg-cover bg-center bg-no-repeat' style={{
                backgroundImage : `url(${image})`,
            }}>
                <div className='overlay absolute inset-0 bg-black opacity-80'></div>
                <div className="max-w-full h-[100vh] md:flex flex-wrap justify-center md:items-center gap-10 mx-auto my-auto pt-16">
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} className='w-[70%] h-[50%] md:w-[25%] md:h-[70%] md:mt-0 rounded-lg  mx-auto md:mx-0 opacity-80'/>
                    <div className="w-[90%] md:w-[60%] py-5 mx-auto md:mx-0 h-[70%] md:ml-0 ">
                        <h1 className="md:text-5xl text-3xl opacity-80 text-white font-medium  pb-2">{movieDetails.title}</h1>
                        <h3 className='text-xl opacity-80 text-white pb-10'>{movieDetails.release_date} ~ {gapName}</h3>
                        <p className='text-sm md:text-xl italic pb-5 text-white opacity-80'>{movieDetails.tagline}</p>
                        <h2 className='text-2xl text-white font-medium pb-3 opacity-80'>Overview</h2>
                        <p className='text-sm md:text-xl text-white  opacity-80' >{movieDetails.overview}</p>
                        <div className="flex justify-center w-full gap-8 pt-5">
                            <div className="w-1/2">
                                <h2 className='text-xl md:text-2xl text-white font-medium pb-2 italic opacity-80'>Negara Produksi</h2>
                                <p className='text-sm md:text-xl text-white pb-4 opacity-80'>{movieDetails.production_countries.map((negara) => negara.name).join(', ')}</p>
                                <h2 className='text-xl md:text-2xl text-white font-medium pb-2 italic opacity-80'>Penggemar</h2>
                                <p className='text-sm md:text-xl text-white   opacity-80 mb-10'>{movieDetails.popularity}</p>
                                <a href={video_key ? `https://www.youtube.com/watch?v=${video_key}` : '#'} className='px-4 py-2 bg-orange-600 text-white text-xl hover:bg-orange-400 opacity-80' target="_blank" rel="noopener noreferrer">
                                {video_key ? 'Tonton' : 'Video tidak tersedia'}
                                </a>
                            </div>
                            <div className="w-1/2">
                                <h2 className='text-xl md:text-2xl text-white font-medium pb-2 italic opacity-80' >Perusahaan Produksi</h2>
                                <p className='text-sm md:text-xl text-white  opacity-80'>{movieDetails.production_companies.map((company) => company.name).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto px-2 pt-16">
                <h1 className="text-start ps-9 mb-14 py-4 text-orange-600 font-medium text-3xl md:text-6xl opacity-80 ">Aktor</h1>
                <div className="w-full md:columns-4 columns-2 px-10 flex justify-center flex-wrap gap-10">
                    <Actors />
                </div>
            </div>
            <div className="w-full mx-auto px-2 pt-16 mt-5">
                <h1 className="text-start ps-9 mb-14 py-4 text-orange-600 font-medium text-3xl md:text-6xl opacity-80 ">Crew</h1>
                <div className="w-full md:columns-4 columns-2 max-c px-10 flex justify-center flex-wrap gap-10">
                    <Crew />
                </div>
            </div>
            <div className="w-full text-center pt-5">
                <Footer />
            </div>
        </div>
        </>
    )
}