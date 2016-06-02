/**
 * Created by hejinbeijing on 16/5/24.
 */
import alt from '../alt';
import SelectModeActions from '../actions/SelectModeActions';

class SelectModeStore {
    constructor() {
        this.bindActions(SelectModeActions);
        this.result = [];
    }

    onGetGamers1Success(data) {
        this.result["getGamers1"]=data;
        console.log("getGamers1 data is "+data);
    }

    onGetGamers1Failed(errorMessage) {
        toastr.error(errorMessage);
    }
    onGetGroups1Success(data) {
        this.result["getGroups1"]=data;
    }

    onGetGroups1Failed(errorMessage) {
        toastr.error(errorMessage);
    }
    onGetGamers2Success(data) {
        this.result["getGamers2"]=data;
    }

    onGetGamers2Failed(errorMessage) {
        toastr.error(errorMessage);
    }
    onGetGroups5Success(data) {
        this.result["getGroups5"]=data;
    }

    onGetGroups5Failed(errorMessage) {
        toastr.error(errorMessage);
    }
}

export default alt.createStore(SelectModeStore);