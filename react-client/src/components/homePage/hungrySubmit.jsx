import axios from 'axios';
import React from 'react';

import styledHome from './styledHomeIndex.js';

class HungrySubmit extends React.Component {
  constructor(props) {
    super(props);
    this.getRestaurant = this.getRestaurant.bind(this);
    this.enterRestaurant = this.enterRestaurant.bind(this);
  }

  enterRestaurant(e) {
    if (e.key === 'Enter') { 
      console.log(e.key)
      this.getRestaurant();
    }
  }

  getRestaurant() {
    if(this.props.term) {
      axios.get(`/api/random/${this.props.location}/${this.props.term}`).then((res) => {  
        this.props.final(res.data, this.props.location, this.props.term);
        console.log(res.data);
      }).catch((e) => {
        console.log(e);
        this.props.error();
      });
    } else {
      axios.get(`/api/random/${this.props.location}`).then((res) => {  
        this.props.final(res.data, this.props.term);
        console.log(res)
      }).catch(() => {
        this.props.error();
      });
    }
  }

  render() {
    const { StyHunBut } = styledHome;
    return (
      <div>
        <form>
          <StyHunBut
            type="button"
            name="HungrySubmit"
            value="I'm Feeling Hungry!"
            onClick={this.getRestaurant}
            
            onMouseEnter={this.props.dance}
            onMouseLeave={this.props.stopDance}
          /> 
        </form>
      </div>
    );
  }
}

export default HungrySubmit;
