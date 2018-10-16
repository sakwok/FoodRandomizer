import React from 'react';

import styledHome from './styledHomeIndex.js';

const CategoryBar = (props) => {
  const { StyLocInput } = styledHome;
  return (
    <div>
      <form>
        <StyLocInput
          type="text"
          name="CategoryBar"
          value={props.term}
          onChange={props.updateTerm}
          placeholder="What are you feeling today?"
        /> 
      </form>
    </div>
  );
}

export default CategoryBar;
