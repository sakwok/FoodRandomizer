import React from 'react';

import styledIndex from './styledHomeIndex.js';

import LocationBar from './locationBar.jsx';
import HungrySubmit from './hungrySubmit.jsx'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: '',
    }
    this.updateLocation = this.updateLocation.bind(this);
  }
  
  updateLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  render() {
    const { StyLocationBarDiv} = styledIndex;
    const { StyButtonDiv } = styledIndex;

    return (
      <div>
        <StyLocationBarDiv>
          <LocationBar updateLocation={this.updateLocation}/>
        </StyLocationBarDiv>
        <StyButtonDiv>
          <HungrySubmit final={this.props.final} location={this.state.location}/>
        </StyButtonDiv>
      </div>
    );
  }
}

export default HomePage;
