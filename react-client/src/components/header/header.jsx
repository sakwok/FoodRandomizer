import React from 'react';

import styledIndex from '../../styledIndex.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hover: false,
    }
    this.updateHover = this.updateHover.bind(this);
  }

  updateHover() {
    this.setState((prev) => (
      {hover: !prev.hover}
    ));
  }

  render() {
    const { StyHeaderDiv, StyNameSpan, StyNameA, StyRightImg } = styledIndex;

    return (
      <div>
        <StyHeaderDiv>
          <StyNameSpan>
            <StyRightImg />
            {
              this.state.hover ? 
              ((<b>
                <StyNameA href="http://localhost:3000" onMouseEnter={this.updateHover} onMouseLeave={this.updateHover}>
                  (Uh)...
                </StyNameA>
              </b>)) : 
              (<b>
                <StyNameA href="http://localhost:3000" onMouseEnter={this.updateHover} onMouseLeave={this.updateHover}>
                  (饿)...
                </StyNameA>
              </b>)
            }
          </StyNameSpan>
        </StyHeaderDiv>
      </div>
    );
  }
}

export default Header;
