import React from 'react';
import TipsDialog from './TipsDialog'
import PubSub from 'pubsub-js'

class Office extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      display: "none"
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
  }
  
  handleClick(){
    console.log("aaaa");
    this.setState({display:"block"});
  }
  render() {

    return (
          <div className="container ol_container">
              <div className="row common_top">
                  <div className="column common_user">
                      <div className="common_photo"><img src="images/tx.png"/></div>
                      <div className="common_position">总经理</div>
                  </div>
                  <div className="column common_date">第1年-02月-18日</div>
                  <div className="column common_capital">400,000,000</div>
              </div>
              <div className="ol_label">
                  <a className="ol_label_intelligence" onClick={this.handleClick.bind(this)}></a>
                  <a className="ol_label_details"></a>
                  <a className="ol_label_development"></a>
                  <a className="ol_label_meeting"></a>
                  <a className="ol_label_help"></a>
                  <TipsDialog display = {this.state.display}/>
              </div>
      </div>
    );
  }
}

export default Office;