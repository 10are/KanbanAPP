import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';

export function ReduxProviders({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
