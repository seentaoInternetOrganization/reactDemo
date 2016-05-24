import alt from '../alt';
import BankActions from '../actions/BankActions';

class BankStore {
  constructor() {
    this.bindActions(BankActions);
    this.loans = [];
  }

  onGetLoansOfAllBankSuccess(data) {
      var result = JSON.parse(data);
      this.loans = result.loans;
  }

  onGetLoansOfAllBankFailed(errorMessage) {
    console.log('errorMessage = ' + typeof errorMessage);
    toastr.error(errorMessage);
  }
}

export default alt.createStore(BankStore);