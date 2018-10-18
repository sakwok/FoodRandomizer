import axios from 'axios';
import React from 'react';

import styledFinal from './styledFinalIndex.js';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class FinalPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      recommended: false,
      dance: false,
    };
    this.getRestaurant = this.getRestaurant.bind(this);
    this.updateDance = this.updateDance.bind(this);
  }

  getRestaurant() {
    if(this.props.term) {
      axios.get(`/api/random/${this.props.location}/${this.props.term}`).then((res) => {  
        this.props.final(res.data,this.props.location,this.props.term);
        console.log(res.data);
      }).catch((e) => {
        console.log(e);
        this.props.error();
      });
    } else {
      axios.get(`/api/random/${this.props.location}`).then((res) => {  
        this.props.final(res.data,this.props.term);
        console.log(res)
      }).catch(() => {
        this.props.error();
      });
    }
  }

  updateDance() {
    this.setState((prev) => (
      {dance: !prev.dance}
    ));
  }
  
  render() {
    const { restaurant } = this.props;
    const number = restaurant.display_phone ? restaurant.display_phone : 'Not Provided';
    const { StyLeftDiv, StyRightDiv, StyResImg } = styledFinal;
    const { StyResNameDiv, StyRateDiv, StyStarsSpan, StyNumRatA, StyDonutImg } = styledFinal;
    const { StyStdDiv, StyMapDiv } = styledFinal;
    const starSRC = {0: 'https://i.imgur.com/zvvKbFp.png', 1: 'https://i.imgur.com/aX1hkm7.png', 1.5: 'https://i.imgur.com/uGgPv8a.png', 2: 'https://i.imgur.com/Xnsc3pk.png', 2.5: 'https://i.imgur.com/KgmdaAW.png', 3: 'https://i.imgur.com/yZvRFko.png', 3.5: 'https://i.imgur.com/igdomJX.png', 4: 'https://i.imgur.com/LP1jQI1.png', 4.5: 'https://i.imgur.com/MW7xPdm.png', 5: 'https://i.imgur.com/pgaaXcW.png' };
    const style = { width: '800px', height: '750px'};
    return (
      <div>
        <StyLeftDiv>
          <div>
            <StyResImg src={restaurant.image_url}/>
          </div>
          <div>
            <StyResNameDiv>
              <b>{restaurant.name}</b>
            </StyResNameDiv>
            <StyRateDiv>
              <div>
                <StyStarsSpan stars={restaurant.rating} img={starSRC}/>
                <StyNumRatA href={restaurant.url}>Based on {restaurant.review_count} Reviews </StyNumRatA>
                <StyStdDiv>
                  <b>Open Now! Price: {restaurant.price}</b>
                </StyStdDiv>
                <StyStdDiv>
                  <b>Phone Number: {number} </b>
                </StyStdDiv>
                <StyStdDiv>
                  <b>Address: <br/> {restaurant.location.address1}</b> <br />
                  <b>{restaurant.location.city}, {` ${restaurant.location.state}`} {` ${restaurant.location.zip_code}`}</b>
                </StyStdDiv>
              </div>
              <div>
                {
                  this.state.dance ? 
                  (<StyDonutImg src="https://i.imgur.com/FiKmcfQ.gif" onClick={this.getRestaurant} onMouseEnter={this.updateDance} onMouseLeave={this.updateDance}/>) :
                  (<StyDonutImg src="https://puu.sh/BLydn/240d829a7a.png" onClick={this.getRestaurant} onMouseEnter={this.updateDance} onMouseLeave={this.updateDance}/>)
                }
                
              </div>
            </StyRateDiv>
          </div>
        </StyLeftDiv>
        <StyRightDiv>
          <StyMapDiv>
            <Map google={this.props.google} zoom={18} initialCenter={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} center={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} style={style}>
              <Marker 
                onClick={this.onMarkerClick}
                name={restaurant.name} 
                position={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
              />
              <InfoWindow onClose={this.onInfoWindowClose}>
              </InfoWindow>
            </Map>
          </StyMapDiv>
        </StyRightDiv>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('INSERT GOOGLE API TOKEN HERE')
})(FinalPage)