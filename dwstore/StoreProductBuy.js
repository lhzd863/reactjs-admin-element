import React, { Component } from 'react';

import 'element-theme-default';

import StoreHeader from './StoreHeader.js';
import ProductBuyInfoContainers from '../redux/containers/ProductBuyInfoContainers.js';
import ProductBuyTabs from './ProductBuyTabs.js';

class StoreProductBuy extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
   <div>
      <StoreHeader />
      <div style={{ padding: 14 }}> </div>
      <ProductBuyInfoContainers />
      <ProductBuyTabs />
   </div>
    );
  }

}

export default StoreProductBuy;

