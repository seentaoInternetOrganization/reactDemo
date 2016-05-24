import alt from '../alt';
import OrderResultActions from '../actions/OrderResultActions';

class OrderResultStore {
  constructor() {
    this.bindActions(OrderResultActions);
    this.orderResults = [];
  }
  onGetOrderResultSuccess(data) 
  {
    console.log(data);
    this.orderResults = data;
    
  }

  onGetOrderResultFail(errorMessage) 
  {
    toastr.error(errorMessage);
  }
}

export default alt.createStore(OrderResultStore);