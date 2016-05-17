import React from 'react';
import OemStore from '../stores/OemStore'
import OemActions from '../actions/OemActions';
import SubmitDialog from './SubmitDialog';
import TipsDialog from './TipsDialog';
class Oem extends React.Component {
	constructor(props) {
    super(props);
    this.state = OemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    OemStore.listen(this.onChange);
    OemActions.getOEMFactories();
    console.log("生命周期方法");
  }

  componentWillUnmount() {
    OemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(index) {
    // 显示弹窗
    // this.setState({submitDisplay : "block"});
    // OemStore.submitDisplay = "block";

    OemActions.setSubmitIndex(index);
    OemActions.setSubmitDisplay("block");
    console.log(index);
  }
  render() {
    var itemSize = 272;
    var size = this.state.oems.length;
    var oemFactories = this.state.oems.map((oem, index) => {
      var products = oem.oemOutputs.split(",");
      var details = products.map((product) => {
          var detail = product.split("_");
          return  <div key={detail[0]}>
                  <li>{detail[0]}</li>
                  <li>可产数量：{detail[2]}</li>
                  <li>单价：{detail[3]}</li>
                  <li>交货时间：{detail[4]}</li>
                  </div>
      });
        return    <div key={oem.oemFactoryId} className="index_03_00" id="gyzx">
                  <h1>{oem.oemFactoryName}</h1>
                  {details}
                  <button className="index_03_02" id = {index} onClick={this.handleClick.bind(this, index)}></button>
                </div>
    });

    return (
<div>
      <div className="index_00">
        <div className="index_01">
            <div className="index_01_00">
                <div className="index_01_01" id="gy"><i></i></div>
                <div className="index_01_02" id="sy"><i></i></div>
            </div>
            <div className="index_03" id="gyzx">
                <div className="index_04" style={{width: size*itemSize}}>
                {oemFactories}
                </div>
            </div>
        </div>
      </div>
      <SubmitDialog />
      <TipsDialog />

</div>
    );
  }
}

export default Oem;