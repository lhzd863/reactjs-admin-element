import React, { Component } from 'react';

import { Button, Layout } from 'element-react';
import 'element-theme-default';

class ProductBuyShoppingCartOrderSummary extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
      <div>
        <Layout.Row>
              <Layout.Col span={ 22 } offset={ 21 }>
                  <div>实付款：¥ </div>
                  <Button type="danger" >提交订单 </Button> 
              </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

}

export default ProductBuyShoppingCartOrderSummary;

