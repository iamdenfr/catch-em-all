import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    }

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header">Catch`em all!</div>
                {!isAuth && 
                <div className="navbar__login"><NavLink to="/login"><div>{t('navbar.login')}</div></NavLink></div> 
                }
                {!isAuth && 
                <div className="navbar__registration"><NavLink to="/registration"><div>{t('navbar.register')}</div></NavLink></div> 
                }
                {isAuth && 
                <div className="navbar__login" onClick={() => dispatch(logout()) }><NavLink to="/login"><div>{t('navbar.exit')}</div></NavLink></div> 
                }
                <div className='navbar__language'>
                <button className="navbar__login" onClick={() => changeLanguage("en")}>EN</button>
                <button className="navbar__login" onClick={() => changeLanguage("ua")}>UA</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;