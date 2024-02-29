import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IMovies} from "../interfaces";
import {movieService} from "../services";
import {Movie} from "../components";
import css from "../components/MoviesContainer/Movie.module.css";

const SingleGenrePage = () => {

    const {id} = useParams();

    const [movies, setMovies] = useState<IMovies>(null);

    useEffect(() => {
        movieService.getMoviesByGenreId(+id).then(({data})=> {
                setMovies(data);
            }
        );
    }, []);

    const moviesArray = movies?.results;

    return (
            <div className={css.Movies}>
                {moviesArray&&moviesArray.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SingleGenrePage};