import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setisLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload;
           }
    }
})

export const getcartThunk = () => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/cart",getConfig())
    .then((res) => dispatch(setCart(res.data.data.cart.products)))
    .finally(() => dispatch(setisLoading(false)));
}
  
export const createcartThunk = (products) => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.post("https://e-commerce-api.academlo.tech/api/v1/cart",products, getConfig())
        .then(() => dispatch(getcartThunk()))
        .finally(() => dispatch(setisLoading(false)));
}

export const checkoutCartThunk = () => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.post("https://e-commerce-api.academlo.tech/api/v1/purchases",{}, getConfig() )
        .then(() => dispatch(setCart([])))
        .finally(() => dispatch(setisLoading(false)));
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
