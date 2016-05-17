import alt from '../alt';
import OemActions from '../actions/OemActions';

class OemStore {
  constructor() {
    this.bindActions(OemActions);
    this.oems = [];
    this.submitDisplay = "none";
  }

  onGetOEMFactoriesSuccess(data) {
    console.log(data);
    this.oems = data;
  }

  onGetOEMFactoriesFail(errorMessage) {
    toastr.error(errorMessage);
  }
  onSetSubmitDisplay(display){
  	this.submitDisplay = display;
    console.log(display);
  }
}

export default alt.createStore(OemStore);