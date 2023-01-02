import React, {useState} from "react";
import Input from "../../utils/input/Input";
import {createProduct} from "../../actions/user";
import './product.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";

const AddProduct = () => {
    const { t, i18n } = useTranslation();

    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    return (
        <div className="authorization">
            <div className="authorization__header">{t('addproduct.title')}</div>
            <Input value={code} setValue={setCode} type="text" placeholder={t('addproduct.code')}/>
            <Input value={title} setValue={setTitle} type="text" placeholder={t('addproduct.name')}/>
            <Input value={price} setValue={setPrice} type="text" placeholder={t('addproduct.price')}/>
            <Input value={description} setValue={setDescription} type="text" placeholder={t('addproduct.description')}/>
            <Input value={amount} setValue={setAmount} type="text" placeholder={t('addproduct.amount')}/>
            <div className="authorization__header"><NavLink to="/">{t('addproduct.back')}</NavLink></div>
            <button className="authorization__btn" onClick={() => 
                createProduct(code, title, price, description, amount)
                }>{t('addproduct.add')}</button>
            
        </div>
    );
}

export default AddProduct;