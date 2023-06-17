import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: {
    totalQuantity: 0,
    items: [],
    totalPrice: 0,
  },
  ui: {
    isShowCart: true,
    notification: null,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showNotification(state, action) {
      state.ui.notification = {
        status: action.payload.status, // pending, success, failed
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleCart(state) {
      state.ui.isShowCart = !state.ui.isShowCart;
    },
    replaceCart(state, action) {
      state.cart.totalQuantity = action.payload.totalQuantity;
      state.cart.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const itemIndex = state.cart.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cart.totalQuantity += 1;

      if (itemIndex < 0) {
        state.cart.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
        return;
      }
      const newQuantity = state.cart.items[itemIndex].quantity + 1;

      state.cart.items[itemIndex] = {
        ...action.payload,
        quantity: newQuantity,
        total: action.payload.price * newQuantity,
      };
    },
    increaseQuantity(state, action) {
      const existItem = state.cart.items.find(
        (item) => action.payload.id === item.id
      );
      state.cart.totalQuantity += 1;
      existItem.total += existItem.price;
      existItem.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const existItem = state.cart.items.find(
        (item) => action.payload.id === item.id
      );
      state.cart.totalQuantity -= 1;
      if (existItem.quantity === 1) {
        state.cart.items = state.cart.items.filter(
          (item) => item.id !== existItem.id
        );
      } else {
        existItem.quantity -= 1;
        existItem.total -= existItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export default store;
