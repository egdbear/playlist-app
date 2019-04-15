import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, { history } from './redux/store/configureStore';
import reset from './styles';

const GlobalStyle = createGlobalStyle`
  ${reset};
`;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <GlobalStyle />
        <App />
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
