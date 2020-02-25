import React, { Component } from 'react';

import { Tabs} from 'element-react';
import './StoreProduct.css';
import './ProductMarkdown.css';
import productDetail from './ProductBuyTabsDetail.md';
import productPromise  from './ProductBuyTabsPromise.md';
import ReactMarkdown from 'react-markdown';
import ProductBuyTabsPromise from './ProductBuyTabsPromise.js';
import ProductBuyTabsComment from './ProductBuyTabsComment.js';

class ProductBuyTabsDetail extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
              <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                  <Tabs.Pane label="商品详情" name="1">
                       <ReactMarkdown 
                           source={productDetail} 
                           escapeHtml={false}
                       />
                  </Tabs.Pane>
                  <Tabs.Pane label="累加评价" name="2">
                      <ProductBuyTabsComment />
                  </Tabs.Pane>
                  <Tabs.Pane label="售后服务" name="3">
                      <div className="el-store-product-promise-card-border">
                           <ProductBuyTabsPromise />
                      </div>
                      <div style={{ padding: 14 }}> </div>
                      <div className="el-store-product-markdown">
                          <div className="el-store-product-markdown-promise">
                              <ReactMarkdown 
                                 source={productPromise} 
                                 escapeHtml={false} 
                                 style={{margin:'25px 25px 25px 25px'}}
                              />
                          </div>
                      </div>
                  </Tabs.Pane>
              </Tabs>
    );
  }

}

export default ProductBuyTabsDetail;

