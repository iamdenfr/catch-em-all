import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getProduct, updateProduct, deleteProduct } from "../../actions/user";
import Input from "../../utils/input/Input";
import './product.css'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {

    const location = useLocation();
    const code = Number(location.pathname.split("/")[2]);
    //console.log(code);
    const [product, setProduct] = useState({});
    useEffect(() => {
        getProduct(code)
            .then(data => setProduct(data))
    }, [])

    const navigate = useNavigate()
    const { t, i18n } = useTranslation();
    const [title, setTitle] = React.useState(product.title)
    const [price, setPrice] = React.useState(product.price)
    const [description, setDescription] = React.useState(product.description)
    const [amount, setAmount] = React.useState(product.amount)

    return (
        <div className="authorization">
            <div className="authorization__header">Редагувати товар</div>
            <Input value={title} setValue={setTitle} type="text" placeholder="Уведіть нову назву товару..."/>
            <Input value={price} setValue={setPrice} type="text" placeholder="Уведіть нову ціну товару..."/>
            <Input value={description} setValue={setDescription} type="text" placeholder="Уведіть новий опис товару..."/>
            <Input value={amount} setValue={setAmount} type="text" placeholder="Уведіть нову кількість товару..."/>
            <button className="authorization__btn" onClick={() => updateProduct(code, title, price, description, amount)}>Редагувати товар</button>
            <button className="authorization__btn" onClick={() => deleteProduct(code).then(()=>navigate(-1))}>Видалити товар</button>
        </div>
    );
}

export default UpdateProduct;