import React from 'react';

import classes from './Cart.module.css';
import Modal from '../../Modal/Modal';

const Cart = (props) => {

  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        [
          {id: 'c1', name: 'sushi', 'amount': 2, price: 12.99},
        ].map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  );
  
  return (
    <Modal>
      {cartItems}
      <div>
        <span className={classes.total}>Total amount</span>
        <span>46.7</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.butotn}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;