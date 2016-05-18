import alt from '../alt';

class OemActions {
  constructor() {
    this.generateActions(
      'getOEMFactoriesSuccess',
      'getOEMFactoriesFailed',
      'setSubmitDisplay',
      'setSubmitIndex',
      'setSubmitProduct',
      'setSubmitCount',
      'setEnsureDisplay'
    );
  }

  getOEMFactories() {
    console.log("发送请求");

    $.ajax({ url: '/api/getOEMFactories' })
      .done(data => {
        this.actions.getOEMFactoriesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getOEMFactoriesFailed(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(OemActions);