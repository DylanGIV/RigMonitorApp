import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppContent from './src';
import configureStore from './src/redux/store'

const { store, persistor } = configureStore()

export default function App() {

    return (
      <Provider store={store}>
        <AppContent/>
      </Provider>
    )
}
