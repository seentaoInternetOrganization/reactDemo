import React from 'react';
import MroStore from '../stores/MroStore'
class SubmitDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = MroStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MroStore.listen(this.onChange);
    }

    componentWillUnmount() {
        MroStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        return (

            <div className="xdtc_01" style = {{display: this.state.submitDisplay}}>
                <div className="xdtc_01_00">
                    <span>选择采购数量</span>
                    <a id="gb"></a>
                </div>
                <div className="xdtc_01_01">
                </div>
                <div className="xdtc_01_02">
                    <span>数量:</span>
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