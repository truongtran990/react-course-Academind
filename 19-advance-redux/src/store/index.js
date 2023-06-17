import { configureStore, createSlice } from "@reduxjs/toolkit";

const FIREBASE_URL =
  "https://react-http-a4e82-default-rtdb.asia-southeast1.firebasedatabase.app/";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data to firebase...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(`${FIREBASE_URL}carts.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export default store;
