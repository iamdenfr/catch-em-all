import React, {useState} from "react";
import './product.css'
import {useDispatch} from "react-redux";
import { showProducts } from "../../reducers/productReducer";
import { getProducts } from "../../actions/user";

const ShowProducts = () => {
    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    return (
        <div className="product">
            <div className="product__header">Показати товари</div>
            <button className="product__btn" onClick={() => getProducts(code, title, price, description, amount)}>Показати товари</button>
        </div>
    );
}

export default ShowProducts;
