import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header.jsx';
import HomePage from './components/homePage/homePage.jsx';
import FinalPage from './components/finalPage/finalPage.jsx';
import styledIndex from './styledIndex.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      restaurant: '',
      location: '',
      term: '',
    };
    this.setFinalPage = this.setFinalPage.bind(this);
    this.setErrorPage = this.setErrorPage.bind(this);
  }

  setFinalPage(rest, loc, term) {
    if (term) {
      this.setState({
        page: 'final',
        restaurant: rest,
        location: loc,
        term: term,
      });
    } else {
      this.setState({
        page: 'final',
        restaurant: rest,
        location: loc,
      });
    }
  }

  setErrorPage() {
    this.setState({
      page: 'error'
    })
  }

  render() {
    let page;
    
    if(this.state.page === 'final') {
      page = <FinalPage restaurant={this.state.restaurant} location={this.state.location} term={this.state.term} final={this.setFinalPage}/>  
    }
    if(this.state.page === 'error') {
      return (
        <div>
          Error
        </div>
      )
    }
    if (this.state.page === 'home') {
      page = <HomePage final={this.setFinalPage} error={this.setErrorPage}/>
    }

    const { StyBackgroundDiv } = styledIndex;
    return (
      <StyBackgroundDiv>
          <Header />
          {page}
      </StyBackgroundDiv>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
