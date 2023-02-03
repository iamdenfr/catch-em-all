import React, {useState} from "react";
import './product.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="product">
            <div className="product__header"><NavLink to="products">{t('product.show')}</NavLink></div>
            <div className="product__header"><NavLink to="/products/add">{t('product.new')}</NavLink></div>
        </div>
    );
}

export default MainMenu;
