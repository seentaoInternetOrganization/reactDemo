import React from 'react';
import OrderResultStore from '../stores/OrderResultStore'
import OrderResultActions from '../actions/OrderResultActions';
import PubSub from 'pubsub-js'
import RadioButton from './RadioButton'
class OrderResult extends React.Component {
	constructor(props) {
    super(props);
    //当前页面数据=接受数据
    this.state = OrderResultStore.getState();
    //绑定当前界面
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    OrderResultStore.listen(this.onChange);
    //发送请求，参数：apiName,{}
    OrderResultActions.getOrderResult("/api/getOrderResult", {selectOrderStage:1,sSysId:"aaa"})
    var token1 =  PubSub.subscribe( 'one', this.dealIndex );
  }

  componentWillUnmount() {
    OrderResultStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  dealIndex(msg,data){
    console.log(data)
  }
  
  
  render() {
    var itemSize = 272;
    var size = this.state.orderResults.length;
    var dqNodes = this.state.orderResults.map((item, index) => 
    {
        // var array = item.orderResult.split(",");
        // var teamInfo = array.map((arrayItem, index) => 
        // {
        //     var teamArray = arrayItem.split("_");
        //     return  <div key={index}>
        //               {teamArray[0]}
        //               {teamArray[1]}
        //             </div>
        // });
        return  <div className="column common_label_content_00 common_orl_table" key={index}>
                    <h2>订单号:SP100101</h2>
                    <ul>
                        <li><span>1.南华科技公司</span>
                            <i>获得数量：</i><em>20</em>
                        </li>
                        <li><span>1.南华科技公司</span>
                            <i>获得数量：</i><em>20</em>
                        </li>
                        <li><span>1.南华科技公司</span>
                            <i>获得数量：</i><em>20</em>
                        </li>
                        <li><span>1.南华科技公司</span>
                            <i>获得数量：</i><em>20</em>
                        </li>
                    </ul>
                    <div className=""><span>我获得的数量：</span><i>15</i></div>
                </div>        
    });

    var tabs = [{clickable:true, name:"本地市场"},{clickable:true, name:"区域市场"},{clickable:true, name:"国内市场"},{clickable:true, name:"亚洲市场"},{clickable:true, name:"国际市场"}];
    return (
        <div className="container"> 
          <div className="row common_finance common_orl_div">
              <h1>选单结果公布</h1>
              <a className="common_close_00"></a>
              <ul class="label">
                <li class="common_label_selected">本地市场</li>
                <li>区域市场</li>
                <li>亚洲市场</li>
                <li>国际市场</li>
              </ul>
              <div className="common_content ">
                  <div className="common_label_content" id="sc" style={{width: size*itemSize}}> 
                    {dqNodes} 
                  </div>
              <div>
          </div>
        </div>
    );
  }
}

export default OrderResult;