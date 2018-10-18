import React from 'react';

import styHome from './styledHomeIndex.js';

import LocationBar from './locationBar.jsx';
import CategoryBar from './categoryBar.jsx';
import HungrySubmit from './hungrySubmit.jsx'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: '',
      term: '',
      dance: false,
    }
    this.updateLocation = this.updateLocation.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.dance = this.dance.bind(this);
    this.stopDance = this.stopDance.bind(this);
  }
  
  dance() {
    this.setState({
      dance: true,
    });
  }

  stopDance() {
    this.setState({
      dance: false,
    })
  }

  updateLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  updateTerm(e) {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    const { StyLeftDiv, StyImgDiv, StyRightDiv } = styHome;
    const { StyInfoDiv, StyTitleDiv, StyLocationBarDiv, StyCatDiv, StyButtonDiv, StyDonutDiv, StyDonutImg } = styHome;

    return (
      <div>
        <StyLeftDiv>
          <StyImgDiv>
            <img src={'https://puu.sh/BLyet/bff119c532.png'} width='500' height='500' />
          </StyImgDiv>
        </StyLeftDiv>
        <StyRightDiv>
          <StyTitleDiv>
            <b>Hey.<br />Are you hungry?<br />Decide your next meal.</b>
          </StyTitleDiv>
          <StyInfoDiv>
            <b>Step 1:</b>
            <StyLocationBarDiv>
              <LocationBar updateLocation={this.updateLocation} location={this.state.location}/>
            </StyLocationBarDiv>
            <StyCatDiv>
            <b>Step 2 (Optional):</b>
              <CategoryBar updateTerm={this.updateTerm}/>
            </StyCatDiv>
            <div>
              <StyButtonDiv>
                <b>Step 3:</b>
                <HungrySubmit final={this.props.final} error={this.props.error} location={this.state.location} term={this.state.term} dance={this.dance} stopDance={this.stopDance}/>
              </StyButtonDiv>
            </div>
            <StyCatDiv>
            <StyDonutDiv>
              {this.state.dance ? 
              (<StyDonutImg src="https://i.imgur.com/FiKmcfQ.gif" width='275' height='275'/>) : 
              (<StyDonutImg src="https://puu.sh/BLydn/240d829a7a.png" width='275' height='275'/>)
              }
            </StyDonutDiv>
            </StyCatDiv>
          </StyInfoDiv>
        </StyRightDiv>
      </div>
    );
  }
}

export default HomePage;
