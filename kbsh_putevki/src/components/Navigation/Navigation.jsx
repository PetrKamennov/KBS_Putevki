import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import './Navigation.css'
// import './fonts/RussianRail G Regular.otf'
// import './fonts/RussianRail G Pro Bold.otf'



const Navigation = () => {
    return (
                <nav className="main_page__navbar">
                <div>
                        <Link to="/" className="main_page__navbar__li">ДКОЦСТ “Услада”</Link>
                        <Link to="/a" className="main_page__navbar__li">ДКОЦСТ “Услада”</Link>
                        <li className="main_page__navbar__li">ДОЛ им. Ю. Гарарина</li>
                        <li className="main_page__navbar__li">ДОЛ им. К. Заслонова</li>
                        <li className="main_page__navbar__li">БАЗА ОТДЫХА “Радуга”</li>
                    </div>
                </nav>
    );
};

export default Navigation;