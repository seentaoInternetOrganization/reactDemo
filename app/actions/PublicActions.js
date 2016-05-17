import alt from '../alt';

class PublicActions {
  constructor() {
    this.generateActions(
    'submitSuccess',
      'submitFail',
      'setEnsureDisplay',
      'setTips',
      'setReq'
    );
  }

  submit(api, req) {
    $.ajax({
      type: 'POST',
      url: api,
      data: req
    })
      .done((data) => {
        this.actions.submitSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.submitFail(jqXhr);
      });
  }
}

export default alt.createActions(PublicActions);