import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification.js";

import { cartActions } from "./store/index.js";
let isInitialApp = true;

const FIREBASE_URL =
  "https://react-http-a4e82-default-rtdb.asia-southeast1.firebasedatabase.app/";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const ui = useSelector((state) => state.cart.ui);
  const notification = useSelector((state) => state.cart.ui.notification);
  const dispatch = useDispatch();

  // We use useEffect to update data to the firebase whenever the cart data state is changed
  /* 
  But the problem when we write code like above is the useEffect always execute when our app starts.
  How to solve this problem?
  */
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data to firebase...",
        })
      );
      const response = await fetch(`${FIREBASE_URL}carts.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isInitialApp) {
      isInitialApp = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {ui.isShowCart && <Cart items={cart.items} />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
