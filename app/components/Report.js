import React from 'react';
import ReportActions from '../actions/ReportActions'
import ReportStore from '../stores/ReportStore'
import PubSub from 'pubsub-js'
import RadioButton from './RadioButton';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = ReportStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ReportStore.listen(this.onChange);
        ReportActions.getReport("/api/getReport");
        console.log("请求报表接口");
    }

    componentWillUnmount() {
        ReportStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

render() {
    //4个标签
    var tabs = [{clickable:true, name:"利润表"},{clickable:false, name:"费用表"},{clickable:false, name:"资产负债表"},{clickable:false, name:"销售统计表"}];
    //日期
    var date = this.state.reportDetail.reportYear;
    //利润表数据
    var profitReport = this.state.reportDetail.profitReport;
    //费用表数据
    var costReport = this.state.reportDetail.costReport;
    //资产负债表数据
    var balanceSheet = this.state.reportDetail.balanceSheet;
    //销售统计表数据
    var saleReport = this.state.reportDetail.saleReport;

    if (typeof profitReport === 'string') {
        console.log('profitReport = ' + profitReport);
        let profitReportData = profitReport.split(",");
        console.log('array data = ' + profitReportData[0]);
    }
    // console.log('profitReport = ' + profitReport.split(','));
    // console.log("");


    return <div className="row common_finance">
            <h1>财务报表</h1>
            <a className="common_close_00"></a>
            <RadioButton tabs = {tabs} />  
            <div className="common_content common_finance_content">
                <h2>
                报表年度 :{"第"+date+"年"}
                </h2>
            
                <div className="finance_table">
                    <div className="finance_table_tr">
                        <div className="finance_table_td_00">项目</div>
                        <div className="finance_table_td_01">本年发生</div>
                        <div className="finance_table_td_00">项目</div>
                        <div className="finance_table_td_01">本年发生</div>
                    </div>
                    <div className="finance_table_tr finance_table_tr_00">
                        <div className="finance_table_td_00">销售收入</div>
                        <div className="finance_table_td_01"></div>
                        <div className="finance_table_td_00">支付利息前利润</div>
                        <div className="finance_table_td_01"></div>
                    </div>
                    <div className="finance_table_tr finance_table_tr_00">
                        <div className="finance_table_td_00">直接成本</div>
                        <div className="finance_table_td_01"></div>
                        <div className="finance_table_td_00">账务费用</div>
                        <div className="finance_table_td_01"></div>
                    </div>
                    <div className="finance_table_tr finance_table_tr_00">
                        <div className="finance_table_td_00">毛利</div>
                        <div className="finance_table_td_01"></div>
                        <div className="finance_table_td_00">营业外收支</div>
                        <div className="finance_table_td_01"></div>
                    </div>
                    <div className="finance_table_tr finance_table_tr_00">
                        <div className="finance_table_td_00">综合管理费用</div>
                        <div className="finance_table_td_01"></div>
                        <div className="finance_table_td_00">税前利润</div>
                        <div className="finance_table_td_01"></div>
                    </div>
                    <div className="finance_table_tr finance_table_tr_00">
                        <div className="finance_table_td_00">折旧前利润</div>
                        <div className="finance_table_td_01"></div>
                        <div className="finance_table_td_00">所得税</div>
                        <div className="finance_table_td_01"></div>
                    </div>
                    <div className="finance_table_tr finance_table_tr_00">
                        <div className="finance_table_td_00">折旧</div>
                        <div className="finance_table_td_01"></div>
                        <div className="finance_table_td_00">净利润</div>
                        <div className="finance_table_td_01"></div>
                    </div>
                </div>
                  <div className="common_finance_button">
                    <button type="button" className="btn common_label_content_01">保存报表</button>
                    <button type="button" className="btn">提交报表</button>
                  </div>
            </div>
            </div>

}

}

export default Report;