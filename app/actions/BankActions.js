import alt from '../alt';

class BankActions {
	constructor() {
		this.generateActions(
	      'getLoansOfAllBankSuccess',
	      'getLoansOfAllBankFailed'
	    );
	}
	
  	getLoansOfAllBank() {
      	$.ajax({url: 'getBankLoans'})
      	.done(data => {
          	this.actions.getLoansOfAllBankSuccess(data);
      	})
      	.fail(jqXhr => {
          	this.actions.getLoansOfAllBankFailed(jqXhr.responseJSON.message);
      	});
 	}
}

export default alt.createActions(BankActions);