import alt from '../alt';
import DevQuanlityActions from '../actions/DevQuanlityActions';

class DevQuanlityStore {
  constructor() {
    this.bindActions(DevQuanlityActions);
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

export default alt.createStore(DevQuanlityStore);