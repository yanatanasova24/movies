import React from 'react';
import {Header} from "../components";
import {Outlet} from "react-router-dom";
import bg from "../img/bg.jpg"
import "./MainLayout.css"

const MainLayout = () => {
    return (
        <div className={'MainLayout'}
             style={{backgroundImage: `url(${bg})`}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};