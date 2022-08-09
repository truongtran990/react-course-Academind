import { Fragment, useState } from 'react';
import Cart from './components/Header/Cart/Cart';

import Header from './components/Header/Header';
import Meals from './components/Layout/Meals';

function App() {
  // now the modal always show anytime. so we need to manage it, by using the state
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <Fragment>
      {/* when the cart modal is showing, we can click close button to close it, as well as we click the backdrop the cart modal also close */}
      {isCartShown && <Cart onClose={hideCartHandler}/>}
      {/* when clicking the cart button in the header the cartModal will show */}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
