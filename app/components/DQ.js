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

  handleClick() {
      console.log("Click Here");
  }

  render() {

    var dqNodes = this.state.certificates.map((dqItem, index) => {
        return <div key = {dqItem.cId} className = "index_03_00">
                  <h1>{dqItem.cName.substring(0,4)}</h1>
                  <h1>{dqItem.cName.substring(4,dqItem.cName.length)}</h1>
                    <ul>
                      <li>
                        <span>开发周期 :</span><i>{dqItem.cPerTime+dqItem.cPerTimeUnit}</i>
                      </li>
                      <li>
                        <span>单期费用 :</span><i>{dqItem.cPerFee+"万"}</i>
                      </li>
                      <li>
                        <span>当前开发 :</span><i>{"第"+dqItem.cAlreadyCycle+"期"}</i>
                      </li>
                    </ul>
                  <button className="index_03_06"></button>
                </div>
    });
    return(
      <div className="index_00">
        <div className="index_01">
          <div className="index_01_00">
                <div className="index_01_01" id="gy"><i></i></div>
                <div className="index_01_02" id="sy"><i></i></div>
            </div>
          <div className="index_03">
            <div className="index_04">
              {dqNodes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DQ;