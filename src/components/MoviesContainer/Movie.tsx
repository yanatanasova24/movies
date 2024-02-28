import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import css from './Movie.module.css'
import {Poster} from "./Poster";
import {StarsRating} from "./StarsRating";

interface IProps extends PropsWithChildren{
    movie:IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    const {id, title, original_title, poster_path, vote_average} = movie;

    const navigate = useNavigate();

    return (
        <div className={css.Movie}>
            <a href={id.toString()} onClick={()=>navigate(id.toString(), {state:{movie}})}>
                <Poster poster_path={poster_path} original_title={original_title}/>
                <StarsRating vote_average={vote_average}/>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>original title: {original_title}</div>
                <button >Details</button>
            </a>
        </div>
    );
};

export {Movie};