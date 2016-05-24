import alt from '../alt';

class ReportActions {
    constructor() {
        this.generateActions(
            'getRSysOrdersSuccess',
            'getRSysOrdersFail'


        );
    }

    getRSysOrders() {
        $.ajax({ url: '/api/getMarketROrder' })
            .done(data => {
                this.actions.getRSysOrdersSuccess(data);
            })
            .fail(jqXhr => {
                this.actions.getRSysOrdersFail(jqXhr.responseJSON.message);
            });
    }

}

export default alt.createActions(ReportActions);