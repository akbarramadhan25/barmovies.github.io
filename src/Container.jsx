import { useState, useEffect } from "react"
import Card from "./CardTrending"
import CardAction from "./CardAction"
import CardCartoon from "./CardCartoon"
import CardRomance from "./CardRomance"
import Header from "./Header"
import Search from "./Search"
import Footer from "./Footer"


export default function Container() {
    const [slicedData, setSlicedData] = useState([])
    useEffect(() => {
      const requestData = async () => {
        try {
          const fetchingData = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=feac9bc1302b39df3d32dc7d62bcdb27&language=id-ID')
          const parseData = await fetchingData.json()
          const sliceData = await parseData.results.slice(0, 10)
          setSlicedData(sliceData)
        }catch(e) {
          console.log('Failed', e);
        }
      }
      requestData()
    }, [])
  
   
  
    return (
      <div className='w-[100%] -mt-14 pt-10'>
        <Header />
        <Search  setSlicedData={setSlicedData}/>
        <div className='w-full bg-orange-500 pt-10'>
          <h1 className='text-start  font-bold text-white md:text-4xl text-2xl  ml-10'>Trending</h1>
          <div className='w-full flex gap-5  py-16 overflow-x-auto px-10'>
            <Card slicedData={slicedData}/>
          </div>
        </div>
        <div className='w-full bg-orange-500 pt-10 my-20'>
          <h1 className='text-start  font-bold text-white md:text-4xl text-2xl  ml-10'>Action</h1>
          <div className='w-full flex gap-5  py-16 overflow-x-auto px-10'>
            <CardAction />
          </div>
        </div>
        <div className='w-full bg-orange-500 pt-10 mb-20'>
          <h1 className='text-start  font-bold text-white md:text-4xl text-2xl  ml-10'>Kartun</h1>
          <div className='w-full flex gap-5  py-16 overflow-x-auto px-10'>
            <CardCartoon />
          </div>
        </div>
        <div className='w-full bg-orange-500 pt-10 mb-20'>
          <h1 className='text-start  font-bold text-white md:text-4xl text-2xl  ml-10'>Romance</h1>
          <div className='w-full flex gap-5  py-16 overflow-x-auto px-10'>
            <CardRomance />
          </div>
        </div>
        <div className="w-full text-center pt-5">
          <Footer />
        </div>
      </div>
    )
  }