import alt from '../alt';
import MroActions from '../actions/MroActions';

class MroStore {
    constructor() {
        this.bindActions(MroActions);
        this.rSysOrders = [];
        this.submitDisplay = "none";
    }

    onGetRSysOrdersSuccess(data) {
        console.log(data);
        this.rSysOrders = data;
    }

    onGetRSysOrdersFail(errorMessage) {
        toastr.error(errorMessage);
    }
    onSetSubmitDisplay(display){
        this.submitDisplay = display;
        console.log(display);
    }
}

export default alt.createStore(MroStore);