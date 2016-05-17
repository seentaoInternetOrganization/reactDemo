import React from 'react';
import {Link} from 'react-router';
import MroActions from '../actions/MroActions'
import MroStore from '../stores/MroStore'
import {first, without, findWhere} from 'underscore';

class Mro extends React.Component {
    constructor(props) {
        super(props);
        this.state = MroStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MroActions.getRSysOrders();
        console.log("请求原料市场接口");

        MroStore.listen(this.onChange);
    }

    componentWillUnmount() {
        MroStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        var mroNodes = this.state.rSysOrders.map((mroItem, index) => {
            return <div key = {mroItem.rSysId} className = "index_03_00">
                <div>{mroItem.rName}</div>
                <div>{mroItem.rPerFee}</div>
                <div>{mroItem.rTotalCount}</div>
                <div>{mroItem.storageDays}</div>

            </div>
        });

        return(
            <div className="index_01">
                {mroNodes}
            </div>
        );
    }
}

export default Mro;