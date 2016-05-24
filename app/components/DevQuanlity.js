import React from 'react';
import {Link} from 'react-router';
import DevQuanlityStore from '../stores/DevQuanlityStore'
import DevQuanlityActions from '../actions/DevQuanlityActions'
import {first, without, findWhere} from 'underscore';
import RadioButton from './RadioButton';
import PubSub from 'pubsub-js';

var token;
class DevQuanlity extends React.Component {
	constructor(props) {
    super(props);
    this.state = DevQuanlityStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DevQuanlityActions.getCertificates();
    console.log("请求资质开发接口");
    DevQuanlityStore.listen(this.onChange);

    token =  PubSub.subscribe( 'DevQuanlity', this.checkedIndex );
  }

  componentWillUnmount() {
    DevQuanlityStore.unlisten(this.onChange);

    PubSub.unsubscribe( token );
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(dqItem) {
    var cId=dqItem.cId;
    var cSysId=dqItem.cSysId;
    var cDevelopState=dqItem.cDevelopState;
    if (cDevelopState == 2) {
      DevQuanlityActions.submitCertificate();
    }
    console.log("点击第"+cId+"个");
  }

  checkedIndex(msg, index){
    console.log(msg,index);
    // S:市场准入；ZS:ISO认证；P:产品资质；
    switch(index) {
      case 0:

      break;
      case 1:

      break;
      case 2:

      break;
    }
  }

  render() {
    var itemSize = 272;
    var size = this.state.certificates.length;
    var tabs = [{clickable:true, name:"市场准入"},{clickable:true, name:"ISO认证"},{clickable:true, name:"产品资质"}];
    var dqNodes = this.state.certificates.map((dqItem, index) => {
        return <div key = {dqItem.cId} className = "common_label_content_00">
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
                  <button type="button" className="btn" id={index} onClick={this.handleClick.bind(this,dqItem)}>点击投资</button>
                </div>
    });
    return(
      <div className="container">

        <div className="row common_top">
            <div className="column common_user">
                <div className="common_photo"><img src="images/tx.png"/></div>
                <div className="common_position">总经理</div>
            </div>
            <div className="column common_date">第1年-02月-18日</div>
            <div className="column common_capital">400,000,000</div>
        </div>

        <div className="row common_authentication">
            <a className="common_close"></a>
            <RadioButton tabs = {tabs} msg="DevQuanlity"/>
            <div className="common_content">
                <div className="common_label_content" id="sc" style={{width: size*itemSize}}>
                  {dqNodes}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default DevQuanlity;