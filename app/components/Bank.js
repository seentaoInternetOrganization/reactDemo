import React from 'react';
import {Link} from 'react-router';
import BankStore from '../stores/BankStore'
import BankActions from '../actions/BankActions';
import {first, without, findWhere} from 'underscore';

class Bank extends React.Component {
  constructor(props) {
    super(props);
    this.state = BankStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    BankStore.listen(this.onChange);
  }

  componentWillUnmount() {
    BankStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick() {
      BankActions.getLoansOfAllBank();
  }

  asyncDemoClick() {
      BankActions.asyncDemoFunction();
  }

  render() {
    
    var loanNodes = this.state.loans.map((loanItem, index) => {
        return <div key = {loanItem.loanId} className = 'index_03_00'>
                  <div>{loanItem.loanName}</div>
                  <div>{loanItem.loanAmount}</div>
                  <div>{loanItem.loanTimeUnit}</div>
                  <div>{loanItem.loanSysId}</div>
                </div>
    });

    return (
      <div className="index_01">
          <img onClick={this.handleClick.bind(this)} src={'../images/zzrz_02.png'}/>
          <img onClick={this.asyncDemoClick.bind(this)} src={'../images/zzrz_03.png'}/>
          {loanNodes}
      </div>
    );
  }
}

export default Bank;