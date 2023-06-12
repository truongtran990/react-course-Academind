import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  totalQuantity: 0,
  items: [
    {
      title: "Test Item",
      quantity: 3,
      total: 18,
      price: 6,
      description: "This is a first product - amazing!",
    },
  ],
  totalPrice: 0,
  isShowCart: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (itemIndex < 0) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
        return;
      }
      const newQuantity = state.items[itemIndex].quantity + 1;

      state.items[itemIndex] = {
        ...action.payload,
        quantity: newQuantity,
        total: action.payload.price * newQuantity,
      };
    },
    increaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += 1;
        state.items[itemIndex].total =
          state.items[itemIndex].quantity * state.items[itemIndex].price;
      }
    },
    decreaseQuantity(state, action) {
      if (action.payload.quantity === 1) {
        return;
      }
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      if (itemIndex > -1) {
        state.items[itemIndex].quantity -= 1;
        state.items[itemIndex].total =
          state.items[itemIndex].quantity * state.items[itemIndex].price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export default store;
