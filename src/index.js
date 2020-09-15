import React from 'react';
import ReactDOM from 'react-dom';
import User from './component/User'
import Color from './component/Color'
import { Provider } from './react-redux/index'
import store from './store/index'
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Color></Color>
      <User></User>
    </div>
  </Provider>
  ,
  document./* getElementById */('root')
);
