import alt from '../alt';
import ReportActions from '../actions/ReportActions';

class ReportStore {
    constructor() {
        this.bindActions(ReportActions);
        this.reportDetail =[] ;

    }

    onGetReportSuccess(data) {
        console.log(data);
        this.reportDetail = data;
    }

    onGetReportFail(errorMessage) {
        toastr.error(errorMessage);
    }

}

export default alt.createStore(ReportStore);