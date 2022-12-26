import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">Catch`em all!</div>
                {!isAuth && <div className="navbar__login"><NavLink to="/login">Увійти</NavLink></div> }
                {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Реєстрація</NavLink></div> }
                {isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }><NavLink to="/login">Вихід</NavLink></div> }
            </div>
        </div>
    );
};

export default Navbar;