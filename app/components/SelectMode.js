/**
 * Created by hejinbeijing on 16/5/24.
 */
import React from 'react';
import {Link} from 'react-router';
import SelectModeStore from '../stores/SelectModeStore'
import SelectModeActions from '../actions/SelectModeActions';
import {first, without, findWhere} from 'underscore';

class SelectMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = SelectModeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SelectModeStore.listen(this.onChange);
    }

    componentWillUnmount() {
        SelectModeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        SelectModeActions.getGamers1();
    }
    asyncDemoClick() {
        // SelectModeActions.asyncDemoFunction();
    }

    render() {
        // var loanNodes = this.state.loans.map((loanItem, index) => {
        //     return <div key = {loanItem.loanId} className = 'index_03_00'>
        //         <div>{loanItem.loanName}</div>
        //         <div>{loanItem.loanAmount}</div>
        //         <div>{loanItem.loanTimeUnit}</div>
        //         <div>{loanItem.loanSysId}</div>
        //     </div>
        // });
        //
        return (
            <div className="index_01">
                <img onClick={this.handleClick.bind(this)} src={'../images/zzrz_02.png'}/>
                <img onClick={this.asyncDemoClick.bind(this)} src={'../images/zzrz_03.png'}/>
            </div>
        );
    }
}

export default SelectMode;