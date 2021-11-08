import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
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

export const tableID = 1;
// const tableParam = "/:table"

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <>
              <Route exact path='/' component={App} />
              <Route exact path='/panel' component={Panel} />
              <Route path='/panel/waiter' component={Waiter} />
              <Route path='/panel/kitchen' component={Kitchen} />
          </>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


