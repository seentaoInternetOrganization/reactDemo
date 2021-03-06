import React from 'react';
import PubSub from 'pubsub-js';
class RadioButton extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange(state) {
    this.setState(state);
  }
  handleClick(index) {
    if(this.state.selectedIndex != index){
      this.setState({selectedIndex: index});
      //发送反馈
      PubSub.publish(this.props.msg, index);
    }
    
  } 
  render() {

    var tabs = this.props.tabs.map((tab, index) => {
      var clickableClass;
          if(index == this.state.selectedIndex)
            return  <li key = {index} onClick={this.handleClick.bind(this, index)} className="common_label_selected" id="sc_bq">{tab.name}</li>
          else
            return  <li key = {index} onClick={this.handleClick.bind(this, index)} >{tab.name}</li>
      });
    return (
    <ul className="label">
                {tabs}
    </ul>
    );
  }
}

export default RadioButton;