import alt from '../alt';
import DQActions from '../actions/DQActions';

class DQStore {
  constructor() {
    this.bindActions(DQActions);
    this.certificates = [];
    this.code = -1;
  }

  onGetCertificatesSuccess(data) {
    console.log(data);
    this.certificates = data;
  }

  onGetCertificatesFailed(errorMessage) {
    toastr.error(errorMessage);
  }

  onSubmitCertificateSuccess(data) {
    console.log(data);
    this.code = data;
  }

  onSubmitCertificateFailed(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(DQStore);