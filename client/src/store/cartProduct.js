import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartItem",
  initialState: initialState,
  reducers: {
    handleAddItemCart: (state, action) => {
      state.cart = [...action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },

    // implement updateCart

  },
});

export const { handleAddItemCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
