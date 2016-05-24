import alt from '../alt';
import ReportActions from '../actions/ReportActions';

class ReportStore {
    constructor() {
        this.bindActions(ReportActions);
        this.rSysOrders = [];

    }

    onGetRSysOrdersSuccess(data) {
        console.log(data);
        this.rSysOrders = data;
    }

    onGetRSysOrdersFail(errorMessage) {
        toastr.error(errorMessage);
    }

}

export default alt.createStore(ReportStore);