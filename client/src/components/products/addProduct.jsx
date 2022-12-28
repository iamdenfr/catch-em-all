import React, {useState} from "react";
import Input from "../../utils/input/Input";
import {createProduct} from "../../actions/user";
import './product.css'
import {useDispatch} from "react-redux";

const AddProduct = () => {
    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    return (
        <div className="authorization">
            <div className="authorization__header">Додати товар</div>
            <Input value={code} setValue={setCode} type="text" placeholder="Уведіть код товару..."/>
            <Input value={title} setValue={setTitle} type="text" placeholder="Уведіть назву товару..."/>
            <Input value={price} setValue={setPrice} type="text" placeholder="Уведіть ціну товару..."/>
            <Input value={description} setValue={setDescription} type="text" placeholder="Уведіть опис товару..."/>
            <Input value={amount} setValue={setAmount} type="text" placeholder="Уведіть кількість товару..."/>
            <button className="authorization__btn" onClick={() => createProduct(code, title, price, description, amount)}>Додати товар</button>
        </div>
    );
}

export default AddProduct;