import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification.js";
import { sendCartData, fetchCartData } from "./store/cart.actions.js";

let isInitialApp = true;

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const ui = useSelector((state) => state.cart.ui);
  const notification = useSelector((state) => state.cart.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // We use useEffect to update data to the firebase whenever the cart data state is changed
  /* 
  But the problem when we write code like above is the useEffect always execute when our app starts.
  How to solve this problem?
  */
  useEffect(() => {
    if (isInitialApp) {
      isInitialApp = false;
      return;
    }

    if (cart.isChanged) dispatch(sendCartData(cart));
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
