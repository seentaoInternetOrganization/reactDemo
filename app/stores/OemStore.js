import alt from '../alt';
import OemActions from '../actions/OemActions';

class OemStore {
  constructor() {
    this.bindActions(OemActions);
  }

  onGetOEMFactoriesSuccess(data) {
    this.result = data;
  }

  onGetOEMFactoriesFail(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(OemStore);