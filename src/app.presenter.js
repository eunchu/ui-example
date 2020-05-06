import React, { Fragment } from 'react';

import GlobalStyle from './global-style';

import MainPage from './components/pages/main-page/main-page';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MainPage />
    </Fragment>
  );
}

export default App;