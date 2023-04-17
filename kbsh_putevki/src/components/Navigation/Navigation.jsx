import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import './Navigation.css'
import { useState, useEffect } from "react";



const Navigation = () => {

    const [orlenok, setOrlenok] = useState("orlenok")
    const [uslada, setUslada] = useState("uslada")
    const [gagarina, setGagarina] = useState("gagarina")
    const [zaslonova, setZaslonova] = useState("zaslonova")
    const [raduga, setRaduga] = useState("raduga")
    const currentUrl = window.location.href;
    const Defolt = () => {
        setOrlenok("orlenok")
        setUslada("uslada")
        setGagarina("gagarina")
        setZaslonova("zaslonova")
        setRaduga("raduga")
    }
    const currentPage = () => {
        switch (window.location.href) {
            case "http://localhost:3000/":
                Defolt()
                setOrlenok("orlenok active_link")
                break;
                case "http://localhost:3000/uslada":
                Defolt()
                setUslada("uslada active_link")
                break;
            case "http://localhost:3000/gagarina":
                Defolt()
                setGagarina("gagarina active_link")
                break;
            case "http://localhost:3000/zaslonova":
                Defolt()
                setZaslonova("zaslonova active_link")
                break;
                case "http://localhost:3000/raduga":
                Defolt()
                setRaduga("raduga active_link")
                break;
                default:
                    console.log(window.location.href)
                break;
            }
            

    }

    const PageRoute = (key)=>{
        Defolt()
        switch (key) {
            case 1:
                setOrlenok("orlenok active_link")
                break;
            case 2:
                setUslada("uslada active_link")
                break;
            case 3:
                setGagarina("gagarina active_link")
                break;
            case 4:
                setZaslonova("zaslonova active_link")
                break;
            case 5:
                setRaduga("raduga active_link")
                break;
            default:
                break;
        }
    }
        useEffect(() => {

            currentPage()

    }, [])
    return (
        <nav className="main_page__navbar" onLoad={(e) => currentPage()}>
                <div>
                <Link to="/" onClick={(e) => PageRoute(1)} className={orlenok}>ДОЛ “Орленок”</Link>
                <Link to="/uslada" onClick={(e) => PageRoute(2)} className={uslada}>ДКОЦСТ “Услада”</Link>
                <Link to='/gagarina' onClick={(e) => PageRoute(3)} className={gagarina}>ДОЛ им. Ю. Гарарина</Link>
                <Link to='/zaslonova' onClick={(e) => PageRoute(4)} className={zaslonova}>ДОЛ им. К. Заслонова</Link>
                <Link to='/raduga' onClick={(e) => PageRoute(5)} className={raduga}>БАЗА ОТДЫХА “Радуга”</Link>
                    </div>
                </nav>
    );
};

export default Navigation;