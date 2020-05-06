import React from 'react';
import ReactDOM from 'react-dom';

import LibraryListPresenter from './library-list.presenter';

describe('[components/arganisms/library-list/library-list.presenter.js]', () => {
  test('스모크 테스트', () => {
    const el = document.createElement('div');
    ReactDOM.render(<LibraryListPresenter />, el)
  })
})