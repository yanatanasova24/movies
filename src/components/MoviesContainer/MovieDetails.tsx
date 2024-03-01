import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import {GenreBadge} from "./GenreBadge";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren{
    movieDetails:IMovie
}

const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {id, title, original_title, original_language, genre_ids, overview, poster_path, release_date, vote_average, vote_count} = movieDetails

    return (
        <div>
            <div>id: {id}</div>
            {genre_ids.map(id=><GenreBadge key={id} id={id}/>)}
        </div>
    );
};

export {MovieDetails};