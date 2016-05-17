import alt from '../alt';
import OemActions from '../actions/OemActions';

class OemStore {
  constructor() {
    this.bindActions(OemActions);
    this.oems = [];
    this.submitDisplay = "none";
    this.ensureDisplay = "none";
    this.submitIndex = 0;
	this.oemFactoryId = "";
	this.productIndex = 0;
  this.pSysId = "";
	this.pOrderCount = 1;
	this.productCount = 0;
  }
  onGetOEMFactoriesSuccess(data) {
    console.log(data);
    this.oems = data;
  }

  onGetOEMFactoriesFail(errorMessage) {
    toastr.error(errorMessage);
  }
  onSetSubmitDisplay(display){
  	this.submitDisplay = display;
    console.log(display);
  }
  onSetEnsureDisplay(display){
  	this.ensureDisplay = display;
    console.log(display);
  }
  onSetSubmitIndex(index){
  	this.submitIndex = index;
  	this.oemFactoryId = this.oems[index].oemFactoryId;
  	this.productIndex = 0;
    this.pSysId = this.oems[this.submitIndex].oemOutputs.split(",")[0].split("_")[1];
	this.pOrderCount = 1;
	this.productCount = this.oems[this.submitIndex].oemOutputs.split(",")[0].split("_")[2];
    console.log(index);
  }
  onSetSubmitProduct(product){
  	this.productIndex = product;
    this.pSysId = this.oems[this.submitIndex].oemOutputs.split(",")[product].split("_")[1];
  	this.productCount = this.oems[this.submitIndex].oemOutputs.split(",")[product].split("_")[2];
  	this.pOrderCount = 1;
    console.log(product);
  }
  onSetSubmitCount(count){
  	this.pOrderCount = count;
    console.log(count);
  }
}

export default alt.createStore(OemStore);