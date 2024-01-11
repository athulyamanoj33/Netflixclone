/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const imageUrl = "https://image.tmdb.org/t/p/original";
function Rowpost(props) {
  const [movie, setMovie] = useState([]);
  const [urlid, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response);
      setMovie(response.data.results);
    });
  }, [props.url]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c6c400afdbe6fe17e49889c78642033b&language=en-US`
      )

      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };
  return (
    <div className=" bg-black  overflow-hidden ">
      <h1 className="font-bold text-2xl bg-black text-white pb-3 pl-2 pt-3 ">
        {props.title}
      </h1>
      <div className=" flex flex-row items-center w-full h-60 p-2 overflow-x-scroll overflow-y-hidden ">
        {movie.map((obj, i) => {
          return (
            <div  className="h-full w-80" key={i}>
             
              <img
                onClick={() => handleMovie(obj.id)}
                className="h- w-full pr-3 pl-2 cursor-pointer object-contain"
                src={`${imageUrl + obj.backdrop_path}`}
              />
            </div>
          );
        })}
      </div>
      {urlid && <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default Rowpost;
