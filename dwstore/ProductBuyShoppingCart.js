import React, { Component } from 'react';

import 'element-theme-default';
import { Layout } from 'element-react';

import ProductBuyShoppingCartFlow from './ProductBuyShoppingCartFlow.js';
import ProductBuyShoppingCartAddress from './ProductBuyShoppingCartAddress.js';
import ProductBuyShoppingCartOrder from './ProductBuyShoppingCartOrder.js';
import ProductBuyShoppingCartOrderSummary from './ProductBuyShoppingCartOrderSummary.js';

class ProductBuyShoppingCart extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
      <div>
           <Layout.Row>
              <Layout.Col span={ 20 } offset={ 2 }>
                 <ProductBuyShoppingCartFlow />
                 <ProductBuyShoppingCartAddress />
                 <ProductBuyShoppingCartOrder />
                 <ProductBuyShoppingCartOrderSummary />
              </Layout.Col>
           </Layout.Row>
      </div>
    );
  }

}

export default ProductBuyShoppingCart;

