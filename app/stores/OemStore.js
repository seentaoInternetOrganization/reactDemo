import alt from '../alt';
import OemActions from '../actions/OemActions';

class OemStore {
  constructor() {
    this.bindActions(OemActions);
    this.oems = [];
  }

  onGetOEMFactoriesSuccess(data) {
    console.log(data);
    this.oems = data;
  }

  onGetOEMFactoriesFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(OemStore);