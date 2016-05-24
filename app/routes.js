import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Oem from './components/Oem';
import DQ from './components/DQ';
import Mro from './components/Mro';
import Bank from './components/Bank';
import OrderResult from './components/OrderResult';
import Report from './components/Report';


export default (
	<Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/oem' component={Oem} />
      <Route path='/dq' component={DQ} />
      <Route path='/mro' component={Mro} />
      <Route path='/bank' component={Bank} />
      <Route path='/orderResult' component={OrderResult} />
      <Route path='/report' component={Report} />
  </Route>
);