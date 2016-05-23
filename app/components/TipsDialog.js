import React from 'react';
import PublicStore from '../stores/PublicStore'
import PublicActions from '../actions/PublicActions';
class TipsDialog extends React.Component {
	constructor(props) {
    super(props);
    this.state = PublicStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    PublicStore.listen(this.onChange);
  }

  componentWillUnmount() {
    PublicStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  handleClick() {
    PublicActions.setEnsureDisplay("none");
  }
  
  //显示确认弹框
  submit(api){
      PublicActions.setEnsureDisplay("none");
      //提交操作
      console.log(api);
      PublicActions.submit(api, this.state.req);
  }
  render() {
    return (
    <div className="xdtc_01" style={{display: this.state.ensureDisplay}}>
        <div className="xdtc_01_00">
            <span>通知</span>
            <a id="gb" onClick={this.handleClick.bind(this)}></a>
        </div>
        <span>{this.state.tips}</span>
        <button onClick={this.submit.bind(this, this.props.api)}></button>
    </div>
    );
  }
}

export default TipsDialog;