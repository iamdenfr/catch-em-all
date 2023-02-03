import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";
import {useTranslation} from "react-i18next";

const Registration = () => {
    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorization'>
            <div className="authorization__header">{t('register.title')}</div>
            <Input value={email} setValue={setEmail} type="text" placeholder={t('register.email')}/>
            <Input value={password} setValue={setPassword} type="password" placeholder={t('register.password')}/>
            <button className="authorization__btn" onClick={() => registration(email, password)}>
                {t('register.register')}
            </button>
        </div>
    );
};

export default Registration;