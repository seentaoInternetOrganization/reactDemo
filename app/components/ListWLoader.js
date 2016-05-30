import React from 'react';
import PubSub from 'pubsub-js';
class ListWLoader extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      data: ["什sdfsfg么","什么sdfgs啊","sdfgsdfg sfg 鬼","什sdfsfg么","什么sdfgs啊","sdfgsdfg sfg 鬼","什sdfsfg么","什么sdfgs啊","sdfgsdfg sfg 鬼"]
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  }
  
  componentWillUnmount() {
  }

  onChange(state) {
    this.setState(state);
  }
  
  handleClick() {  
    this.state.data.push("添加 dfsg s dfg 啊");
    this.setState({data: this.state.data});
    console.log(this.state.data.length);
  } 
  handleScroll(e) {
    console.log('浏览器滚动事件');
  }
  render() {
    var listData = this.state.data.map((item, index) => {
        return <div key = {index} >
                  {item}
                </div>
    });
    return (
    <div id = "divid" style={{width:200, height:200,overflow:"auto"}}>
    {listData}
    <br></br>
    <button onClick = {this.handleClick.bind(this)}>加载更多</button>
    </div>
    );
  }
}

export default ListWLoader;