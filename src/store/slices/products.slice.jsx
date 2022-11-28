import { createSlice } from "@reduxjs/toolkit";
import { setisLoading } from "./isLoading.slice";
import axios from "axios";

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload
          }
    }
});

export const getProductsThunk = () => dispatch => {
    dispatch(setisLoading (true)); 
    axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setisLoading(false)));
};
export const filterProductsThunk = (id) => dispatch => {
    dispatch(setisLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setisLoading(false)));
}
export const filterNameThunk = (inputSearch) => dispatch => {
    dispatch(setisLoading(true));
    return axios
     .get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`)
     .then((res) => dispatch(setProducts(res.data.data.products)))
     .finally(() => dispatch(setisLoading(false)));
}



export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
