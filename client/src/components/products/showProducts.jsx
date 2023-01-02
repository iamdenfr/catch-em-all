import React, { useState, useEffect } from 'react';
import { getProducts } from '../../actions/user';
import { NavLink } from 'react-router-dom';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {products.map(product => (
                <div key={product._id}>
                    <NavLink to ="/${product.code}"><h3>{product.title}</h3></NavLink>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}
export default ShowProducts;