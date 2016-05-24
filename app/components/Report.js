import React from 'react';
import ReportActions from '../actions/ReportActions'
import ReportStore from '../stores/ReportStore'


class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = ReportStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ReportActions.getRSysOrders();
        console.log("请求原料市场接口");

        ReportStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ReportStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        this.gys1Click();
    }
    handleClick() {
        
        console.log("Click Here");
    }

    gys1Click() {
        console.log("gys1");
        $("#gys1 i").hide();
        $("#gys2 i").show();
        $("#gys3 i").show();
    }

    gys2Click() {
        console.log("gys2");
        $("#gys1 i").show();
        $("#gys2 i").hide();
        $("#gys3 i").show();
    }

    gys3Click() {
        console.log("gys3");
        $("#gys1 i").show();
        $("#gys2 i").show();
        $("#gys3 i").hide();
    }

    render() {
        var itemSize = 272;
        // var size = this.state.rSysOrders.length;
        var reportNodes = this.state.rSysOrders.map((reportItem, index) => {
            return <div key = {reportItem.rSysId} className = "index_03_00" id="report">
                <h1>{reportItem.rName}</h1>
                <ul>
                    <li>
                        <span>单价 :</span><i>{reportItem.rPerFee+"万"}</i>
                    </li>
                    <li>
                        <span>到货 :</span><i>{reportItem.arrivalDays+"天"}</i>
                    </li>
                    <li>
                        <span>供应量 :</span><i>{reportItem.rTotalCount}</i>
                    </li>
                    <li>
                        <span>质保期 :</span><i>{reportItem.storageDays+"天"}</i>
                    </li>
                    <li>
                        <span>应付期 :</span><i>{reportItem.payableDays+"天"}</i>
                    </li>
                </ul>

            </div>
        });
        return(
            <div className="index_00">
                <div className="index_01">
                    <div className="index_01_00">
                        <div className="index_01_06" id="gys1" onClick={this.gys1Click.bind(this)}><i></i></div>
                        <div className="index_01_07" id="gys2" onClick={this.gys2Click.bind(this)}><i></i></div>
                        <div className="index_01_08" id="gys3" onClick={this.gys3Click.bind(this)}><i></i></div>
                    </div>
                    <div className="index_03" id="mro">
                        <div className="index_04" style={{width: itemSize}}>
                            {reportNodes}
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Report;