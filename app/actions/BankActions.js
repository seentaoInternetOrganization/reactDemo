import alt from '../alt';
import async from 'async';
import webApiUtil from '../utils/WebApiUtils';

class BankActions {
	constructor() {
		this.generateActions(
	      'getLoansOfAllBankSuccess',
	      'getLoansOfAllBankFailed'
	    );
	}
	
    getLoansOfAllBank() {

        $.ajax({url: '/getBankLoans', 
    	       type: 'GET'
    	}).done(data => {
            this.actions.getLoansOfAllBankSuccess(data);
        }).fail(jqXhr => {
            console.log('jqXhr = ' + jqXhr);
      		this.actions.getLoansOfAllBankFailed(jqXhr.responseJSON.message);
    	});
 	}
    // 串行且有关联demo，按顺序执行串行任务
    asyncDemoFunction() {
        async.waterfall([
            webApiUtil.stepOneRequest,
            webApiUtil.stepTwoRequest,
            webApiUtil.stepThreeRequest
        ],
        // 最终执行结果
        function(err, results) {
            // results is now equal to: {one: 1, two: 2}
            console.log('err = ' + err + '  results = ' + results);
        });
    }
}


export default alt.createActions(BankActions);