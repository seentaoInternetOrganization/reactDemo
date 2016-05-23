import React from 'react';
import {Link} from 'react-router';
import DQStore from '../stores/DQStore'
import DQActions from '../actions/DQActions'
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
    this.sczrClick();
  }

  handleClick(dqItem) {
    var cId=dqItem.cId;
    var cSysId=dqItem.cSysId;
    var cDevelopState=dqItem.cDevelopState;
    if (cDevelopState == 2) {
      DQActions.submitCertificate();
    }
    console.log("点击第"+cId+"个");
  }

  sczrClick() {
    console.log("市场准入");
    $("#sczr i").hide();
    $("#iso i").show();
    $("#cpzz i").show();
  }

  isoClick() {
    console.log("ISO认证");
    $("#sczr i").show();
    $("#iso i").hide();
    $("#cpzz i").show();
  }

  cpzzClick() {
    console.log("产品资质");
    $("#sczr i").show();
    $("#iso i").show();
    $("#cpzz i").hide();
  }

  render() {
    var itemSize = 272;
    var size = this.state.certificates.length;
    var dqNodes = this.state.certificates.map((dqItem, index) => {
        return <div key = {dqItem.cId} className = "index_03_00" id="dq">
                  <h1>{dqItem.cName.substring(0,4)}</ h1>
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
                  <button className={"index_03_06_"+dqItem.cDevelopState} id={index} onClick={this.handleClick.bind(this,dqItem)}></button>
                </div>
    });
    return(
      <div className="index_00">
        <div className="index_01">
          <div className="index_01_00">
            <div className="index_01_03" id="sczr" onClick={this.sczrClick.bind(this)}><i></i></div>
            <div className="index_01_04" id="iso" onClick={this.isoClick.bind(this)}><i></i></div>
            <div className="index_01_05" id="cpzz" onClick={this.cpzzClick.bind(this)}><i></i></div>
          </div>
          <div className="index_03" id="dq">
            <div className="index_04" style={{width: size*itemSize}}>
              {dqNodes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DQ;