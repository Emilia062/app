import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import './index.css';
import App from './App';
import "./scss/main.scss";


ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <>
              <Route exact path='/' component={App} />
              {/*<Route path='/panel' component={Panel} />*/}
          </>
      </HashRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


