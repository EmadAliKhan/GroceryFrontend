
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCart: [],
  isLoading: false,
  isError: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log(action.payload.data._id);
      const existingProductIndex = state.addToCart.findIndex(
        (p) => p.data._id === action.payload.data._id
      );
      console.log(existingProductIndex);
      if (existingProductIndex === -1) {
        // If the product is not in the cart, add it with count = 1
        state.addToCart.push({ ...action.payload, count: 1 });
      } else {
        // If the product is already in the cart, do nothing or show a message
        console.log("Product already in cart. Use increment action to add more.");
      }
    },
    removeAddToCart: (state, action) => {
      console.log(action.payload);
      state.addToCart = state.addToCart.filter(
        (prod) => prod.data._id !== action.payload._id
      );
    },
    cartIncrement: (state, action) => {
      const product = state.addToCart.find((p) => p.data._id === action.payload);
      if (product) {
        product.count += 1;
      }
    },
    cartDecrement: (state, action) => {
      const product = state.addToCart.find((p) => p.data._id === action.payload);
      if (product && product.count > 1) {
        console.log(product.count);
        product.count -= 1;
      }
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addCart, removeAddToCart, cartIncrement, cartDecrement } = actions;

export default reducer;
