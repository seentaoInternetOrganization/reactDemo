import React from 'react';
import OemStore from '../stores/OemStore'
import OemActions from '../actions/OemActions';
import PublicActions from '../actions/PublicActions';

class SubmitDialog extends React.Component {
	constructor(props) {
    super(props);
    this.state = OemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    OemStore.listen(this.onChange);
  }

  componentWillUnmount() {
    OemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  handleClick() {
    OemActions.setSubmitDisplay("none");
  }
  choseClick(index) {
    console.log(index);
    OemActions.setSubmitProduct(index);
  }
  add(){
    if(this.state.pOrderCount<this.state.productCount){
      //设置减号可点击
      var count = this.state.pOrderCount+1;
      OemActions.setSubmitCount(count);
      if(count>=this.state.productCount){
        //设置加号不可点击
      }
    }
  }
  minus(){
      if(this.state.pOrderCount>0){
      //设置加号可点击
      var count = this.state.pOrderCount-1;
      OemActions.setSubmitCount(count);
      if(count<=0){
        //设置加号不可点击
      }
    }
  }
  //显示确认弹框
  submit(){
      PublicActions.setEnsureDisplay("block");
      OemActions.setSubmitDisplay("none");
      PublicActions.setTips("什么通知");
      PublicActions.setReq({oemFactoryId: this.state.oemFactoryId, pSysId: this.state.pSysId, pOrderCount: this.state.pOrderCount});


  }
  render() {
    //初始化产品
    var _index = this.state.submitIndex;
    // var data = this.state.oems[index];
    var oemProducts = this.state.oems.map((oem, index) => {
      if(index == _index){
        console.log(index);
        var products = oem.oemOutputs.split(",");
        var details = products.map((product, index1) => {
              var detail = product.split("_");
              var className = "";
              if(index1 == this.state.productIndex){
                  className = "xdtc_01_01_b";
              }else{
                  className = "";
              }
              return  <div key={detail[0]} onClick={this.choseClick.bind(this,index1)} className = {className}>
                        <span>{detail[1]}</span>
                        {detail[0]}
                      </div>
          });
      }
      return details;
    });
    // var products = data[1].oemOutputs.split(",");
    // var details = products.map((product) => {
    //       var detail = product.split("_");
    //       return  <div key={detail[0]}>
    //               
    //               </div>
    //   });
    return (

        <div className="xdtc_01" style = {{display: this.state.submitDisplay}}>
          <div className="xdtc_01_00">
              <span>下单</span>
              <a id="gb" onClick={this.handleClick.bind(this)}></a>
          </div>
          <div className="xdtc_01_01">
          {oemProducts}
          </div>
          <div className="xdtc_01_02">
            <span>选择数量:</span>
            <a className="xdtc_01_03" onClick={this.minus.bind(this)}></a>
            <input className="xdtc_01_04" readOnly="readonly" value={this.state.pOrderCount} type="text" />
            <a id="xdzj" onClick={this.add.bind(this)}></a>
          </div>
          <button onClick={this.submit.bind(this)}></button>
        </div>

    );
  }
}

export default SubmitDialog;