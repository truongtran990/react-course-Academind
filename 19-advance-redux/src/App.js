import { useSelector } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const FIREBASE_URL =
  "https://react-http-a4e82-default-rtdb.asia-southeast1.firebasedatabase.app/";

function App() {
  const cart = useSelector((state) => state.cart);

  // We use useEffect to update data to the firebase whenever the cart data state is changed
  useEffect(() => {
    fetch(`${FIREBASE_URL}carts.json`, {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {cart.isShowCart && <Cart items={cart.items} />}
      <Products />
    </Layout>
  );
}

export default App;
