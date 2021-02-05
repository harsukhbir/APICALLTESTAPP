import React from 'react';
import { Provider } from 'react-redux'

import store from './src/redux/store'
import TopNavigation from './src/navigation/index'
function App() {
  return (
    <Provider store={store}>
      <TopNavigation />
    </Provider>
  )
}

export default App;
