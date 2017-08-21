import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import store from '../store';
import { Provider, connect } from 'react-redux';

describe('App tests', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    );
  });
});
