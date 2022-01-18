import React, { useEffect, useState } from "react"
import "./Banner.css"
import axios from './axios'
import requests from "./Request"
import Typewriter from 'typewriter-effect';

function Banner() {
    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request 
        }

        fetchData()
    } , [])


    function truncate(string , n) {
        return string?.length > n ? string.substr(0 , n - 1) + "..." : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize : "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    <Typewriter 
                        options={{
                            strings: [movie?.title || movie?.name || movie?.original_name],
                            autoStart: true,
                            loop: true,
                        }}
                    /> 
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(
                        (
                            <Typewriter 
                                options={{
                                    strings: [movie?.overview],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        ), 150)}
                </h1>
                
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
