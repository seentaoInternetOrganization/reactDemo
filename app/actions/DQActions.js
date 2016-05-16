import alt from '../alt';

class DQActions {
  constructor() {
    this.generateActions(
      'getCertificatesSuccess',
      'getCertificatesFail'
    );
  }

  getCertificates() {
    $.ajax({ url: '/api/getCertificates' })
      .done(data => {
        this.actions.getCertificatesSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.getCertificatesFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(DQActions);