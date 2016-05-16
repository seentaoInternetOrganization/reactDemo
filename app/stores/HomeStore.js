import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.loans = [];
  }

  onGetLoansOfAllBankSuccess(data) {
    console.log(data);
    this.loans = data;
  }

  onGetLoansOfAllBankFailed(errorMessage) {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(HomeStore);