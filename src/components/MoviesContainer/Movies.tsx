import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {movieService} from "../../services";
import {Movie} from "./Movie";
import {IMovies} from "../../interfaces";
import css from './Movie.module.css'

interface IProps extends PropsWithChildren{

}

const Movies:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovies>(null);

    useEffect(() => {
        movieService.getAll().then(({data})=>{
            setMovies(data)
        })
    }, []);

    const moviesArray = movies?.results;

    return (
        <div className={css.Movies}>
            {moviesArray&&moviesArray.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};