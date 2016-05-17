import React from 'react';
import OemStore from '../stores/OemStore'
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

  render() {

    return (

        <div className="xdtc_01" style = {{display: this.state.submitDisplay}}>
          <div className="xdtc_01_00">
              <span>下单</span>
              <a id="gb"></a>
          </div>
          <div className="xdtc_01_01">
          </div>
          <div className="xdtc_01_02">
            <span>选择数量:</span>
            <a className="xdtc_01_03"></a>
            <input className="xdtc_01_04" readOnly="readonly" value="0" type="text" />
            <a id="xdzj"></a>
          </div>
          <button></button>
        </div>

    );
  }
}

export default SubmitDialog;