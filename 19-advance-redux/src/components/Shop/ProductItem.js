import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { cartActions } from "../../store/index.js";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { id, title, price, description } = props;

  const addItemToCartHandler = (item) => {
    const newTotalQuantity = cart.totalQuantity + 1;

    // Copy all items in cart avoid mutation
    const updatedItems = cart.items.slice();
    const existItem = updatedItems.find((item) => item.id === id);

    // Check if the product already in the cart, just update the total price and total quantity
    if (existItem) {
      const updatedItem = { ...existItem };
      updatedItem.quantity += 1;
      updatedItem.total += price;

      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;

      // If the item doesn't in the cart -> add it into the cart
    } else {
      updatedItems.push({
        id: id,
        quantity: 1,
        total: price,
        price: price,
        title: title,
      });
    }

    const newCart = {
      items: updatedItems,
      totalQuantity: newTotalQuantity,
    };

    dispatch(cartActions.replaceCart(newCart));
    // dispatch(cartActions.addItemToCart(item));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={() => {
              const item = {
                title,
                price,
                description,
                id,
              };
              addItemToCartHandler(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
