import alt from '../alt';

class OemActions {
  constructor() {
    this.generateActions(
      'getOEMFactoriesSuccess'
      'getOEMFactoriesFail'

    );
  }

  getOEMFactories() {
    $.ajax({ url: '/api/getOEMFactories' })
      .done(data => {
        this.actions.getOEMFactoriesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getOEMFactoriesFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(OemActions);