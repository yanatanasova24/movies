import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppLocation} from "../hooks";
import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {MovieDetails} from "../components";

const MovieDetailsPage = () => {
    const {state} = useAppLocation<{movie:IMovie}>();
    const [movieDetails, setMovieDetails] = useState(null);
    const {id} = useParams()

    useEffect(() => {
        if(state?.movie){
            setMovieDetails(state.movie)
        }else{
            movieService.getById(+id).then(({data})=>setMovieDetails(data))
        }
    }, [id, state]);
    return (
        <div>
            {movieDetails&&<MovieDetails movieDetails={movieDetails}/>}

        </div>
    );
};

export {MovieDetailsPage};