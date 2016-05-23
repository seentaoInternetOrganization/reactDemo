import React from 'react';
import OemStore from '../stores/OemStore'
import OemActions from '../actions/OemActions';
import SubmitDialog from './SubmitDialog';
import TipsDialog from './TipsDialog';
import RadioButton from './RadioButton';
import PubSub from 'pubsub-js';

var token;
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
    token =  PubSub.subscribe( 'radio_index', this.dealIndex );
  }

  componentWillUnmount() {
    OemStore.unlisten(this.onChange);
    PubSub.unsubscribe( token );
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
  dealIndex(msg, index){
    //根据返回处理本组件动作
    console.log(index);
  }
  render() {
    
    var tabs = [{clickable:true, name:"标签1"},{clickable:false, name:"标签2"}];
    
    return (
            
                  <div className="row authentication">
                    <RadioButton tabs = {tabs}/>
                  </div>
    );
  }
}

export default Oem;