import React from 'react';

import Checkout from './checkout.js';

class CheckoutBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Title</div>
        <div>Price Slider</div>
        <div>Category</div>
        <div>Distance</div>
        <div>FOOD ME UP</div>
        <Checkout />
      </div>
    );
  }
}

export default CheckoutBar;
