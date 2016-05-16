import React from 'react';
import OemStore from '../stores/OemStore'
import OemActions from '../actions/OemActions';
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

  render() {
    var sdlfj = this.state.oems;
    var oemFactories = this.state.oems.map((oem) => {
        return    <div key={oem.oemFactoryId} className="index_03_00" id="gyzx">
                  <div>{oem.oemFactoryId}</div>
                  <div>{oem.oemFactoryName}</div>
                  <div>{oem.oemBreachFee}</div>
                  <div>{oem.oemOutputs}</div>
                  <div>{sdlfj[1].oemOutputs}</div>


                </div>
    });

    return (

      <div className="index_00">
        <div className="index_01">
            <div className="index_01_00">
                <div className="index_01_01" id="gy"><i></i></div>
                <div className="index_01_02" id="sy"><i></i></div>
            </div>
            {oemFactories}
        </div>
      </div>

    );
  }
}

export default Oem;