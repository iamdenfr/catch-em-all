import React, { useState, useEffect } from 'react';
import { getProducts } from '../../actions/user';
import { Link, NavLink } from 'react-router-dom';
import './product.css'
import { useTranslation } from 'react-i18next';

const ShowProducts = () => {
    const { t, i18n } = useTranslation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='view__header'>
                <div><NavLink to="/products/add">{t('product.new')}</NavLink></div>
                <div className='view__header__btn'><NavLink to="/">{t('product.back')}</NavLink></div>
            </div>
            <div className='view'>
                {products.map(product => (
                    <div key={product._id} className="product__single">
                        <NavLink to ={{
                            pathname: `/products/${product.code}`,
                            id: product.code}}>
                        <h3>{product.title}</h3></NavLink>
                        <p>{t('product.description')}{product.description}</p>
                        <p>{t('product.price')}{product.price}{t('product.uah')}</p>
                        <p>{t('product.amount')}{product.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ShowProducts;