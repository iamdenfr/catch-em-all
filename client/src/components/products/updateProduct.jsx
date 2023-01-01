import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { updateProduct, deleteProduct } from "../../actions/user";
import Input from "../../utils/input/Input";
import './product.css'
import { useTranslation } from 'react-i18next';

const UpdateProduct = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const product = useSelector(state => state.user.getProduct())
    const [code, setCode] = React.useState(product.code)
    const [title, setTitle] = React.useState(product.title)
    const [price, setPrice] = React.useState(product.price)
    const [description, setDescription] = React.useState(product.description)
    const [amount, setAmount] = React.useState(product.amount)

    return (
        <div className="authorization">
            <div className="authorization__header">Редагувати товар</div>
            <Input value={code} setValue={setCode} type="text" placeholder="Уведіть новий код товару..."/>
            <Input value={title} setValue={setTitle} type="text" placeholder="Уведіть нову назву товару..."/>
            <Input value={price} setValue={setPrice} type="text" placeholder="Уведіть нову ціну товару..."/>
            <Input value={description} setValue={setDescription} type="text" placeholder="Уведіть новий опис товару..."/>
            <Input value={amount} setValue={setAmount} type="text" placeholder="Уведіть нову кількість товару..."/>
            <button className="authorization__btn" onClick={() => updateProduct(product._id, code, title, price, description, amount)}>Редагувати товар</button>
            <button className="authorization__btn" onClick={() => deleteProduct(product._id)}>Видалити товар</button>
        </div>
    );
}

export default UpdateProduct;