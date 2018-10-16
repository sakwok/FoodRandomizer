import React from 'react';

import styledIndex from '../../styledIndex.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      location: '',
    }
  }

  render() {
    const { StyHeaderDiv, StyNameSpan, StyNameA, StyRightImg } = styledIndex;

    return (
      <div>
        <StyHeaderDiv>
          <StyNameSpan>
            <StyRightImg />
            <b>
              <StyNameA href="http://localhost:3000">
                (饿)...
              </StyNameA>
            </b>
            
          </StyNameSpan>
        </StyHeaderDiv>
      </div>
    );
  }
}

export default Header;
