import React, { useState, useEffect } from 'react';
import { getProducts } from '../../actions/user';
import { Link, NavLink } from 'react-router-dom';
import './product.css'

const ShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='view__header'>
                <div><NavLink to="/products/add">Add new product</NavLink></div>
                <div className='view__header__btn'><NavLink to="/">Back to main menu</NavLink></div>
            </div>
            <div className='view'>
                {products.map(product => (
                    <div key={product._id} className="product__single">
                        <NavLink to ={{
                            pathname: `/products/${product.code}`,
                            id: product.code}}>
                        <h3>{product.title}</h3></NavLink>
                        <p>Опис: {product.description}</p>
                        <p>Ціна: {product.price} грн.</p>
                        <p>Кількість на складі: {product.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ShowProducts;