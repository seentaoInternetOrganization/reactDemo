import alt from '../alt';

class OrderResultActions {
  constructor() {
    this.generateActions(
    'getOrderResultSuccess',
      'getOrderResultFail'
    );
  }

  getOrderResult(api, req) {
    $.ajax({
      url: api
    })
      .done((data) => {
        this.actions.getOrderResultSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getOrderResultFail(jqXhr);
      });
  }
}

export default alt.createActions(OrderResultActions);