import React from 'react';

const LocationBar = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="LocationBar"
          value={props.Location}
          onChange={props.updateLocation}
          placeholder="Enter Your City and State Here!"
        /> 
      </form>
    </div>
  );
}

export default LocationBar;
