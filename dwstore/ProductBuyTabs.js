import React, { Component } from 'react';

import { Layout, Card, Form } from 'element-react';
import './StoreProduct.css';
import ProductBuyTabsDetail from './ProductBuyTabsDetail.js';
import ReactMarkdown from 'react-markdown';
import productStatement from './ProductBuyTabsStatement.md';

class ProductBuyTabs extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
    <Layout.Row>
      <Layout.Col span={ 4 } offset={ 0 }>
        <Card bodyStyle={{ padding: 0 }}>
        </Card>
      </Layout.Col>
      <Layout.Col span={ 15 } offset={ 0 }>
        <Form model={this.state.form} labelWidth="10" >
          <Form.Item>
               <ProductBuyTabsDetail />
               <div style={{ padding: 14 }}> </div>
               <div className="el-store-product-markdown-st" style={{pandding: '25px'}}>
                   <div className="el-store-product-markdown-statement">
                       <ReactMarkdown
                          source={productStatement}
                          escapeHtml={false}
                          style={{margin:'25px 25px 25px 25px'}}
                       />
                    </div>
               </div>
          </Form.Item>
        </Form>
      </Layout.Col>
    </Layout.Row>
    );
  }

}

export default ProductBuyTabs;

