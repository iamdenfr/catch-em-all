import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import AddProduct from "./products/addProduct";
import ShowProducts from './products/showProducts';
import UpdateProduct from './products/updateProduct';

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(auth())
    }, [])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                    <Routes>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={<Navigate to ="/login"/>}/>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/products" element={<ShowProducts/>}/>
                        <Route path="/products/add" element={<AddProduct/>}/>
                        <Route path="/products/:id" element={<UpdateProduct/>}/>
                        <Route path="/login" element={<Navigate to ="/products"/>}/>
                    </Routes>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;