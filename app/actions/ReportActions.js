import alt from '../alt';

class ReportActions {
    constructor() {
        this.generateActions(
            'getReportSuccess',
            'getReportFail'
        );
    }

  getReport(api, req) {
    $.ajax({
      url: api
    })
      .done((data) => {
        this.actions.getReportSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getReportFail(jqXhr);
      });
  }
}

export default alt.createActions(ReportActions);