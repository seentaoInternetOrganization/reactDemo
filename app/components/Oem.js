import React from 'react';

class Oem extends React.Component {
	constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // HomeStore.listen(this.onChange);
    // HomeActions.getTwoCharacters();
  }

  componentWillUnmount() {
    // HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  render() {
    return (
      <div>
      代工厂
      </div>
    );
  }
}

export default Oem;