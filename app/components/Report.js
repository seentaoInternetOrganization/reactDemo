import React from 'react';
import ReportActions from '../actions/ReportActions'
import ReportStore from '../stores/ReportStore'
import PubSub from 'pubsub-js'

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



}

export default Report;