import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

   handleClick() {
      HomeActions.getLoansOfAllBank();
      console.log("Click Here");

  }

  render() {

    // var characterNodes = this.state.characters.map((character, index) => {
    //   return (
    //     <div key={character.characterId} className={index === 0 ? 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' : 'col-xs-6 col-sm-6 col-md-5'}>
    //       <div className='thumbnail fadeInUp animated'>
    //         <img onClick={this.handleClick.bind(this, character)} src={'http://image.eveonline.com/Character/' + character.characterId + '_512.jpg'}/>
    //         <div className='caption text-center'>
    //           <ul className='list-inline'>
    //             <li><strong>Race:</strong> {character.race}</li>
    //             <li><strong>Bloodline:</strong> {character.bloodline}</li>
    //           </ul>
    //           <h4>
    //             <Link to={'/characters/' + character.characterId}><strong>{character.name}</strong></Link>
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // });
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
          <img onClick={this.handleClick.bind(this)} src={'../images/OEML_xiadan_n.png'}/>
          {loanNodes}
      </div>
    );
  }
}

export default Home;