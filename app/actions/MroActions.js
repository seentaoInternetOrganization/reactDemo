import alt from '../alt';

class MroActions {
    constructor() {
        this.generateActions(
            'getRSysOrdersSuccess',
            'getRSysOrdersFail',
            'setSubmitDisplay'

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
    //设置弹框显示
    setSubmitDisplay(){
        console.log("设置弹框显示");
        this.actions.setSubmitDisplay(display);
    }
}

export default alt.createActions(MroActions);