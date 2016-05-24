/**
 * Created by hejinbeijing on 16/5/24.
 */
import alt from '../alt';

class SelectModeActions {
    constructor() {
        this.generateActions(
            'getGamers1Success',
            'getGamers1kFailed',
            'getGroups1Success',
            'getGroups1Failed',
            'getGamers2Success',
            'getGamers2kFailed',
            'getGroups5Success',
            'getGroups5kFailed'
        );
    }

    getGamers1() {
        $.ajax({url: 'api/getGamers1',
            type: 'POST'
        }).done(data => {
            this.actions.getGamers1Success(data);
        }).fail(jqXhr => {
            this.actions.getGamers1kFailed(jqXhr.responseJSON.message);
        });
    }
    getGroups1() {
        $.ajax({url: 'api/getGroups1',
            type: 'POST'
        }).done(data => {
            this.actions.getGroups1Success(data);
        }).fail(jqXhr => {
            this.actions.getGroups1Failed(jqXhr.responseJSON.message);
        });
    }
    getGamers2() {
        $.ajax({url: 'api/getGamers2',
            type: 'POST'
        }).done(data => {
            this.actions.getGamers2Success(data);
        }).fail(jqXhr => {
            this.actions.getGamers2kFailed(jqXhr.responseJSON.message);
        });
    }
    getGroups5() {
        $.ajax({url: 'api/getGroups5',
            type: 'POST'
        }).done(data => {
            this.actions.getGroups5Success(data);
        }).fail(jqXhr => {
            this.actions.getGroups5kFailed(jqXhr.responseJSON.message);
        });
    }
}


export default alt.createActions(SelectModeActions);