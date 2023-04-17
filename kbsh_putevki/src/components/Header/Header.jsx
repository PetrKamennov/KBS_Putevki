import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import './Header.css'
// import './fonts/RussianRail G Regular.otf'
// import './fonts/RussianRail G Pro Bold.otf'
import logo from './img/Vector 5.png' 
import exit from './img/Vector 6.png' 


const Header = () => {
    return (
            <header>
                <div className="main_page__header__contant">
                    <img src={logo} />
                <h1 className="main_page__header__h1">Чат-бот “Отдых | РЖД”</h1>
                    <div className="main_page__header__exit_block">
                        <span>выход</span>
                        <img src={exit} />
                    </div>
                </div>
            </header>
    );
};

export default Header;