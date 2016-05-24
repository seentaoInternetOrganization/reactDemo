import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

   handleClick() {
      HomeActions.getLoansOfAllBank();
      console.log("Click Here");

  }

  render() {
    return (
      <div className="index_01">
          <Link to='/oem' >进入代工厂</Link>
          <Link to='/devQuanlity' ><br/><img src={'../images/ol_zizhikaifa_n.png'}/></Link>
          <Link to='/mro' >原料市场</Link>
          <Link to='/orderResult' >选单结果</Link>
          <Link to='/report' > TEST DEMO </Link>
          <Link to='/offoce' > 总经理办公室 </Link>
      </div>
    );
  }
}

export default Home;