import React from "react";
import search from "../../../assets/images/search.svg";
import searchRed from "../../../assets/images/search-red.svg";
import home from "../../../assets/images/home.svg";
import homeRed from "../../../assets/images/home-red.svg";
import store from "../../../assets/images/basket.svg";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    return(
        <>
        <div className="store">
            <div className="outer-circle">
                <NavLink to="/form">
                    <figure className="inner-circle">
                        <img src={store} alt="store"/>
                    </figure>
                </NavLink>
            </div>  
        </div>
        <footer className="footer">
            <figure className="left">
                <NavLink to="/home"
                   className={({isActive}) =>
                   isActive ? "selected link-footer" : "link-footer"
                   }
                >
                   {location.pathname === "/home" ? (
                   <img src={homeRed} alt="icon"/>
                   ) : (
                   <img src={home} alt="icon"/>
                   )}
                   Home
                </NavLink>
            </figure>
            <figure className="right">
                <NavLink
                    to="/search"
                    className={({isActive}) =>
                    isActive ? "selected link-footer" : "link-footer"
                    }
                >
                    {location.pathname === "/search" ?(
                        <img src={searchRed} alt="icon"/>
                    ) : (
                        <img src={search} alt="icon"/>
                    )}
                    Buscar
                </NavLink>
            </figure>
        </footer>
        </>
    );
};

export default Footer;