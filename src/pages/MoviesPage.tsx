import React, {useEffect} from 'react';
import {Movies} from "../components";
import {Outlet} from "react-router-dom";
import {MoviesContainer} from "../components/MoviesContainer/MoviesContainer";
import {useAppContext} from "../hooks/useAppContext";

const MoviesPage = () => {
    const {handleTitleChange} = useAppContext();
    useEffect(() => {
        handleTitleChange('Popular Movies');
    }, []);

    return (
        <div>
            <MoviesContainer/>
        </div>
    );
};

export {MoviesPage};