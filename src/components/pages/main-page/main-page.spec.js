import React from 'react';
import ReactDOM from 'react-dom';

import MainPagePresenter from './main-page.presenter';

describe('[components/pages/main-page/main-page.presenter.js]', () => {
  test('스모크 테스트', () => {
    const el = document.createElement('div');
    ReactDOM.render(<MainPagePresenter />, el)
  })
})