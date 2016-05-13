import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        这是一个基于ReactJS Flux的demo
        <li><Link to='/oem'>代工厂</Link></li>
        
      </div>
    );
  }
}

export default App;