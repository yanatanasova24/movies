import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {movieService} from "../../services";
import {Movie} from "./Movie";
import {IMovies} from "../../interfaces";
import css from './Movie.module.css'
import {Pagination} from "./Pagination";
import {useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren{

}

const Movies:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovies>(null);

    const [query, setQuery] = useSearchParams({page:'1'})

    const [currentPage, setCurrentPage] = useState(1);
    const [prevNext, setPrevNext] = useState({prev:null, next:null})

    const {trigger} = useAppContext();

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data})=>{
            setMovies(data);
            setPrevNext({prev:data.page - 1, next:data.page + 1})
        })
    }, [trigger, query.get('page')]);

    const moviesArray = movies?.results;

    const setPage = (number:number)=>{
        setQuery({page: number.toString()})
    };

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