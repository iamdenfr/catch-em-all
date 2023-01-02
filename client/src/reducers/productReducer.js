const PRODUCTS = "PRODUCTS";
const PRODUCT = "PRODUCT";

const initialState = {
    products: [
        {

        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}

export const showProducts = (products) => ({ type: PRODUCTS, payload: products });