import React, { Component } from 'react';

import 'element-theme-default';

import ProductBuyShoppingCart from './ProductBuyShoppingCart.js';
import StoreHeader from './StoreHeader.js';

class StoreProductBuyShoppingCart extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
   <div>
      <StoreHeader />
      <div style={{ padding: 14 }}> </div>
      <ProductBuyShoppingCart />
   </div>
    );
  }

}

export default StoreProductBuyShoppingCart;

