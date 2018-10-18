import React from 'react';

import styledHome from './styledHomeIndex.js';

const LocationBar = (props) => {
  const { StyLocInput } = styledHome;
  return (
    <div>
      <form>
        <StyLocInput
          type="text"
          name="LocationBar"
          value={props.location}
          onChange={props.updateLocation}
          placeholder="Enter Your Location or City Here!"
        /> 
      </form>
    </div>
  );
}

export default LocationBar;
