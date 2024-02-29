import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {movieService} from "../services";
import {IGenres} from "../interfaces/genresInterface";
import {GenreBadge} from "../components/MoviesContainer/GenreBadge";
import {useAppContext} from "../hooks/useAppContext";

const GenresPage= () => {

    const {handleTitleChange} = useAppContext();

    handleTitleChange('Genre Cloud');

    const [genres, setGenres] = useState<IGenres>(null);

    useEffect(() => {
        movieService.getGenres().then(({data})=> setGenres(data));
    }, []);

    const genresList = genres?.genres;

    return (
        <div>
            {genres&&genresList.map(genre => <GenreBadge id={genre.id} key={genre.id}/>)}
        </div>
    );
};

export {GenresPage};