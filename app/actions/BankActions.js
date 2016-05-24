import alt from '../alt';

class BankActions {
	constructor() {
		this.generateActions(
	      'getLoansOfAllBankSuccess',
	      'getLoansOfAllBankFailed'
	    );
	}
	
  	getLoansOfAllBank() {
      	// $.ajax({url: 'getBankLoans'})
      	// .done(data => {
       //    	this.actions.getLoansOfAllBankSuccess(data);
      	// })
      	// .fail(jqXhr => {
       //    	this.actions.getLoansOfAllBankFailed(jqXhr.responseJSON.message);
      	// });

//       	$.ajax({
//   type: 'POST',
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });

		let jsonData = {'userToken':'1acb38b3cc33d3f33df3232a8a8fbc', 'action':'getBankLoans', 'data':[{'key1':'value1'}, {'key2':'value2'}]};
      	$.ajax({url: '/getBankLoans', 
      			type: 'POST',
      			data: jsonData
      	}).done(data => {
      			this.actions.getLoansOfAllBankSuccess(data);
      	}).fail(jqXhr => {
      			this.actions.getLoansOfAllBankFailed(jqXhr.responseJSON.message);
      	});
 	}
}


export default alt.createActions(BankActions);