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
      const totalQuantity =
        itemIndex > -1 ? state.items[itemIndex].quantity + 1 : 1;
      const newItem = {
        ...action.payload,
        quantity: totalQuantity,
        total: action.payload.price,
      };
      state.items.push(newItem);
    },
    increaseQuantity() {},
    decreaseQuantity() {},
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export default store;
