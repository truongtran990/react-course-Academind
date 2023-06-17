import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/index.js";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
