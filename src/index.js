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
import Panel from "./Panel";
import Waiter from "./Waiter";
import Kitchen from "./Kitchen";


ReactDOM.render(
  <React.StrictMode>
      {/*<App />*/}
      {/*<Panel/>*/}
      <HashRouter>
          <>
              <Route exact path='/' component={App} />
              <Route exact path='/panel' component={Panel} />
              <Route exact path='/panel/waiter' component={Waiter} />
              <Route exact path='/panel/kitchen' component={Kitchen} />
          </>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


