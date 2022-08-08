import { Fragment } from 'react';

import Header from './components/Header/Header';
import Meals from './components/Layout/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
