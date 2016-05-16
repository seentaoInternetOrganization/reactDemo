import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getLoansOfAllBankSuccess',
      'getLoansOfAllBankFailed'
    );
  }

  getLoansOfAllBank() {
      $.ajax({url: '/api/getBankLoans'})
      .done(data => {
          this.actions.getLoansOfAllBankSuccess(data);
      })
      .fail(jqXhr => {
          this.actions.getLoansOfAllBankFailed(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(HomeActions);