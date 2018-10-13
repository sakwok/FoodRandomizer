import axios from 'axios';
import React from 'react';

class HungrySubmit extends React.Component {
  constructor(props) {
    super(props);
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  getRestaurant() {
    axios.get(`/api/random/${this.props.location}`).then((res) => {  
      this.props.final(res.data);
      console.log(res)
    }).catch(e => {
      console.log(e);
    });
  } 

  render() {
    return (
      <div>
        <form>
          <input
            type="button"
            name="HungrySubmit"
            value="I'm Feeling Hungry"
            onClick={this.getRestaurant}
          /> 
        </form>
      </div>
    );
  }
}

export default HungrySubmit;
