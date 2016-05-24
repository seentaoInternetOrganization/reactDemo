import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Oem from './components/Oem';
import DevQuanlity from './components/DevQuanlity';
import Mro from './components/Mro';
import Bank from './components/Bank';
import OrderResult from './components/OrderResult';
import Report from './components/Report';
import Office from './components/Office'


export default (
	  <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/oem' component={Oem} />
      <Route path='/devQuanlity' component={DevQuanlity} />
      <Route path='/mro' component={Mro} />
      <Route path='/bank' component={Bank} />
      <Route path='/orderResult' component={OrderResult} />
      <Route path='/report' component={Report} />
      <Route path='/office' component={Office} />
  </Route>
);