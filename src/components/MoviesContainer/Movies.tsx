import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {movieService} from "../../services";
import {Movie} from "./Movie";
import {IMovies} from "../../interfaces";
import css from './Movie.module.css'
import {Pagination} from "./Pagination";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren{
    movies:IMovies,
    setPage:(page:number)=>void,
    prevNext:{prev:number, next:number}
}

const Movies:FC<IProps> = ({movies, setPage, prevNext}) => {

    const moviesArray = movies?.results;

    return (
        <div className={css.Movies}>
            {moviesArray&&moviesArray.map(movie=><Movie key={movie.id} movie={movie}/>)}
            {movies&&<Pagination
                page={movies.page}
                total_pages={movies.total_pages}
                setPage={setPage}
                prevNext={prevNext}/>
            }
        </div>
    );
};

export {Movies};