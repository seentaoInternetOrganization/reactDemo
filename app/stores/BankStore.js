import alt from '../alt';
import BankActions from '../actions/BankActions';

class BankStore {
  constructor() {
    this.bindActions(BankActions);
    this.loans = [];
  }

  onGetLoansOfAllBankSuccess(data) {
    this.loans = data;
  }

  onGetLoansOfAllBankFailed(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(BankStore);