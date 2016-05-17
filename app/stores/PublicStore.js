import alt from '../alt';
import PublicActions from '../actions/PublicActions';

class PublicStore {
  constructor() {
    this.bindActions(PublicActions);
    this.ensureDisplay = "none";
    this.tips = "";
    this.return = "";
    this.req = "";

  }
  
  onSetEnsureDisplay(display){
  	this.ensureDisplay = display;
    console.log(display);
  }
  onSetTips(tipsStr){
    this.tips = tipsStr;
    console.log(tipsStr);
  }
  onSetReq(params){
    this.req = params;
    console.log(params);
  }
  onSubmitSuccess(data){
    this.return = data;
    console.log(data);

  }
}

export default alt.createStore(PublicStore);