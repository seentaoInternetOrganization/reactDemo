import alt from '../alt';
import DQActions from '../actions/DQActions';

class DQStore {
  constructor() {
    this.bindActions(DQActions);
    this.certificates = [];
  }

  onGetCertificatesSuccess(data) {
    console.log(data);
    this.certificates = data;
  }

  onGetCertificatesFailed(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(DQStore);