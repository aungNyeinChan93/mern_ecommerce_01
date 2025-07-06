import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/product/productSlice';

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat();
    }
});

export default store;