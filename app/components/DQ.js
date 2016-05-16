import React from 'react';
import {Link} from 'react-router';
import DQActions from '../actions/DQActions'
import DQStore from '../stores/DQStore'
import {first, without, findWhere} from 'underscore';

class DQ extends React.Component {
	constructor(props) {
    super(props);
    this.state = DQStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DQActions.getCertificates();
    console.log("请求资质开发接口");

    DQStore.listen(this.onChange);
  }

  componentWillUnmount() {
    DQStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    
    var dqNodes = this.state.certificates.map((dqItem, index) => {
        return <div key = {dqItem.cId} className = "index_03_00">
                  <div>{dqItem.cSysId}</div>
                  <div>{dqItem.cName}</div>
                  <div>{dqItem.cPerTime}</div>
                  <div>{dqItem.cPerTimeUnit}</div>
                </div>
    });

    return(
      <div className="index_01">
        {dqNodes}
      </div>
    );
  }
}

export default DQ;