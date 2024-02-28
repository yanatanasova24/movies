import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ThemeSwitcher} from "./ThemeSwitcher";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>All Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <ThemeSwitcher />
        </div>
    );
};

export {Header};