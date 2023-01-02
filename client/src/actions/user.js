import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {showProducts} from "../reducers/productReducer";

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.message)
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.message)
            localStorage.removeItem('token')
        }
    }
}

export const logout = () => {
    return async dispatch => {
        try {
            localStorage.removeItem('token')
            dispatch(setUser({}))
        } catch (e) {
            alert(e.message)
        }
    }
}

export const createProduct = async (code, title, price, description, amount) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/products`, {
            code,
            title,
            price,
            description,
            amount
        }, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        alert(response.data.message)
    } catch (e) {
        alert(e.message)
    }
}

export const getProducts = async() => {
    try {
        const response = await axios.get(`http://localhost:5000/api/products`)
            return response.data
        } catch (e) {
            alert(e.message)
    }
}


export const getProduct = async (code) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/products/${code}`)
        return response.data
    } catch (e) {
        alert(e.message)
    }
}

export const deleteProduct = async (code) => {
    try {
        
        const candidate = await getProduct(code)
        if (!candidate) {
            alert('Product not found')
            return
        }

        const response = await axios.delete(`http://localhost:5000/api/products/${code}`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        alert(response.data.message)
    } catch (e) {
        alert(e.message)
    }
}

export const updateProduct = async (code, title, price, description, amount) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/products/${code}`, {
            title,
            price,
            description,
            amount
        }, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        alert(response.data.message)
    } catch (e) {
        alert(e.message)
    }
}

