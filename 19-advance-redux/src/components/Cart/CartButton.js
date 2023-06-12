import { useDispatch } from "react-redux";

import { cartActions } from "../../store/index.js";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(cartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
