import React, {FC, PropsWithChildren} from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ThemeSwitcher} from "./ThemeSwitcher";
import {IMovie} from "../../interfaces";
import {useAppContext} from "../../hooks/useAppContext";

interface IProps extends PropsWithChildren{

}

const Header:FC<IProps> = () => {

    const context = useAppContext();

    const headerTitle = context.pageTitle;

    return (
        <div className={css.Header}>
            <NavLink to={'movies'}>All Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <div>{headerTitle}</div>
            <ThemeSwitcher />
        </div>
    );
};

export {Header};