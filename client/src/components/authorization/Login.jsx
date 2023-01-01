import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {useNavigate} from "react-router-dom";
import {useTranslation} from 'react-i18next';

const Login = () => {
    
    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    
    const navigate = useNavigate("/products")

    return (
        <div className='authorization'>
            <div className="authorization__header">{t('login.title')}</div>
            <Input value={email} setValue={setEmail} type="text" placeholder={t('login.email')}/>
            <Input value={password} setValue={setPassword} type="password" placeholder={t('login.password')}/>
            <button className="authorization__btn" onClick={() => 
                dispatch(login(email, password))
                .then(() => navigate())
                }>{t('login.enter')}</button>
        </div>
    );
};

export default Login;