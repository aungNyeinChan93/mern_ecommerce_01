import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../assets/assets';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products,
        isLoading: false,
        error: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },

    },
    // extraReducers:(builder)=>{
    //     builder.addCase()
    // }
});


export default productSlice;
export const { addProduct } = productSlice.actions
