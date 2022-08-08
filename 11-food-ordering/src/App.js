import { Fragment } from 'react';
import Cart from './components/Header/Cart/Cart';

import Header from './components/Header/Header';
import Meals from './components/Layout/Meals';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
