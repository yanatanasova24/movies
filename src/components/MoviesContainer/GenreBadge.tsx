import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";

interface IProps extends PropsWithChildren{
    id:number
}

const GenreBadge:FC<IProps>  = ({id}) => {

    const [genre, setGenre] = useState(null);

    useEffect( () => {
        movieService.getGenreById(id).then(({data})=>setGenre(data))
    }, []);

    return (
        <a href={genre? `/genres/${genre.id}` : '#'}>
            {genre&&genre.name}
        </a>
    );
};

export {GenreBadge};