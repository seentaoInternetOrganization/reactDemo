import alt from '../alt';

class DQActions {
  constructor() {
    this.generateActions(
      'getCertificatesSuccess',
      'getCertificatesFail',
      'submitCertificateSuccess',
      'submitCertificateFail'
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

  submitCertificate() {
    $.ajax({ url: '/api/submitCertificate' })
      .done(data => {
        this.actions.submitCertificateSuccess(data);
      })
      .fail(jqXhr => {
        this.actions.submitCertificateFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(DQActions);