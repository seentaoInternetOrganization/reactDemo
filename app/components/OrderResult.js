import React from 'react';
import OrderResultStore from '../stores/OrderResultStore'
import OrderResultActions from '../actions/OrderResultActions';
import PubSub from 'pubsub-js'
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
  }

  componentWillUnmount() {
    OrderResultStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  
  
  
  render() {
    var dqNodes = this.state.orderResults.map((item, index) => {
      var array = item.orderResult.split(",");
    var teamInfo = array.map((arrayItem, index) => {
      var teamArray = arrayItem.split("_");
      return <div key={index}>
              {teamArray[0]}
              {teamArray[1]}
              </div>
});
      return <div className="column common_label_content_00" key ={item.sSysId}>
                  <h1>本地市场</h1>
                  <h1>准入证开发</h1> 
                  <ul>
                      <li><span>开发周期：</span><i>{item.sSysId}</i></li>
                      <li><span>单期费用：</span><i>{item.orderResult}</i></li>
                      {teamInfo}
                  </ul>
              </div>          
    });



    return (
    <div >
    {dqNodes}
    </div>
    );
  }
}

export default OrderResult;