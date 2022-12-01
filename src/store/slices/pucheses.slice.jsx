import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setisLoading } from './isLoading.slice';
import getConfig from "../../utils/getConfig";

export const puchesesSlice = createSlice({
    name: 'pucheses',
    initialState: [],
    reducers: {
       setPucheses: (state, action) =>{
        return action.payload;
       }
    }
})
export const getPuchesesThunk = () => (dispatch) => {
    dispatch(setisLoading(true));
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/purchases", getConfig())
        .then((res) => dispatch(setPucheses(res.data.data.purchases)))
        .finally(() => dispatch(setisLoading(false)));
}
export const { setPucheses } = puchesesSlice.actions;

export default puchesesSlice.reducer;