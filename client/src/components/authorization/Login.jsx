import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {useNavigate} from "react-router-dom";
//import {NavLink} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    
    const navigate = useNavigate("/products")

    return (
        <div className='authorization'>
            <div className="authorization__header">Авторизація</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Уведіть email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Уведіть пароль..."/>
            <button className="authorization__btn" onClick={() => 
                dispatch(login(email, password))
                .then(() => navigate())
                }>Увійти</button>
        </div>
    );
};

export default Login;