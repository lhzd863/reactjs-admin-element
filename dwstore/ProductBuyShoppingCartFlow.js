import React, { Component } from 'react';

import { Layout, Steps } from 'element-react';
import 'element-theme-default';

class ProductBuyShoppingCartFlow extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
      <div>
        <Layout.Row>
            <Layout.Col span={ 8 } offset={ 0 }>
            </Layout.Col>
            <Layout.Col span={ 16 } offset={ 10 }>
                <Steps space={180} active={2} finishStatus="finish">
                    <Steps.Step title="拍下商品" icon="" ></Steps.Step>
                    <Steps.Step title="付款到账号" icon="" ></Steps.Step>
                    <Steps.Step title="确认收货" icon="" ></Steps.Step>
                    <Steps.Step title="评价" icon="" ></Steps.Step>
                </Steps>
             </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

}

export default ProductBuyShoppingCartFlow;

