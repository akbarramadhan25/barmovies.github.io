import {useState} from 'react'

// eslint-disable-next-line react/prop-types
export default function Search({setSlicedData}) {
    const [search, setSearch] = useState('')
  
  // change the UI based on user input
    function HandleClick() {
        const fetchingData2 = async () => {
          try {
            const requestData2 = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=feac9bc1302b39df3d32dc7d62bcdb27&query=${search}`)
            const parseData2 = await requestData2.json()
            const showData = await parseData2.results.slice(0, 10)
            setSlicedData(showData)
          }catch(e) {
            console.log('Gagal mengambil data film', e);
          }
        }
          fetchingData2() 
    }
    return(
      <div className='w-[85%] mx-auto flex mt-10 mb-24'>
        <input type="text"
        id='searchingMovie'
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Cari Film'
        className='w-full p-3 border border-orange-400 '
        />
        <button type='button' className='px-3 py-2 bg-black text-white hover:bg-slate-900' 
        onClick={HandleClick}>Cari</button>
      </div>
    )
  }