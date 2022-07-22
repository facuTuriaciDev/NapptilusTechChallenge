import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: localStorage.redux_localstorage_simple !== undefined ? JSON.parse(localStorage.redux_localstorage_simple).product.products : [],
    color: '',
    internalMemory: ''
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.splice(action.payload, 1);
    },
    removeAllProducts: (state, action) => {
      state.products.push(action.payload);
    }
  },
})


export const { addProduct, removeAllProducts, removeProduct } = productSlice.actions

export const selectProducts = (state) => state.product.products

export default productSlice.reducer