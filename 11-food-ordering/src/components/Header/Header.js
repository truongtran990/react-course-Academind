import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    // wrapp the header inside the Fragment component
    <React.Fragment>
    {/* start, i consider: should i separate the button and app name into 2 component -> when I create a Header component instance -> I will pass the name of app and cart button -> but 2 element are not quite used many time, resuseable so we don't need to do that. */}
    {/* Create header for app name and button */}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* Create another div for past and image as background of the app */}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  )
}

export default Header;