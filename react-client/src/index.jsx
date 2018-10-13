import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './components/homePage/homePage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      restaurant: '',
    };
    this.setFinalPage = this.setFinalPage.bind(this);
  }

  setFinalPage(rest) {
    this.setState({
      page: 'final',
      restaurant: rest,
    });
  }

  render() {
    if (this.state.page === 'home') {
      return (
        <div>
          <HomePage final={this.setFinalPage}/>  
        </div>
      );
    }
    if(this.state.page === 'final') {
      return (
        <div>
          <FinalPage restaurant={this.state.restaurant}/>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
