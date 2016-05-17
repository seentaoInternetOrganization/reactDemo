import alt from '../alt';
import MroActions from '../actions/MroActions';

class MroStore {
    constructor() {
        this.bindActions(MroActions);
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

export default alt.createStore(MroStore);