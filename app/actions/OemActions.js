import alt from '../alt';

class OemActions {
  constructor() {
    this.generateActions(
      'getOEMFactoriesSuccess',
      'getOEMFactoriesFailed',
      'setSubmitDisplay'
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
  //设置弹框显示
  setSubmitDisplay(){
    console.log("设置弹框显示");
    this.actions.setSubmitDisplay(display);
  }
}

export default alt.createActions(OemActions);