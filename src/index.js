import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './index.css';
import App from './App';
import "./scss/main.scss";
import Panel from "./components/Panel";
import Waiter from "./components/Waiter";
import Kitchen from "./components/Kitchen";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Switch>
              <Route exact path='/menu/:table' component={App} />
              <Route exact path='/panel' component={Panel} />
              <Route path='/panel/waiter' component={Waiter} />
              <Route path='/panel/kitchen' component={Kitchen} />
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


