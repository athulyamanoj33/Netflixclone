import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const imageUrl="https://image.tmdb.org/t/p/original"
function Banner() {
    const[banner,setBanner]=useState({})
    
    console.log(banner)
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=c6c400afdbe6fe17e49889c78642033b&language=en-US")
        .then((result)=>{
          console.log(result.data)
            let rand=Math.floor(Math.random()*10)
            setBanner(result.data.results[rand])
        })

        
    },[])
  return (
    
    <div className="w-full h-screen bg-cover text-white " style={{backgroundImage:`url(${banner?imageUrl+banner.backdrop_path :""})`}}> 
    <div className="pt-40 pl-10 h-7 "><h1 className="font-bold text-5xl pb-5">{banner?banner.name:""}</h1>
    <div>
      <button className="text-white font-bold hover:bg-white hover:text-black cursor-pointer border-none outline-none border-r-2 bg-zinc-900 pb-1 pt-1 pr-4 pl-4 opacity-50 mr-2">Play</button>
      <button className="text-white font-bold hover:bg-white hover:text-black cursor-pointer border-none outline-none border-r-2 bg-zinc-900 pb-1 pt-1 pr-4 pl-4 opacity-50">Mylist</button>
      </div>
      <h1 className="h-4 text-m w-80 pt-4">{banner?banner.overview :""}</h1>
      </div> 
    </div>
  )
}

export default Banner