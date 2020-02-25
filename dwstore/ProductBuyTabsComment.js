import React, { Component } from 'react';

import './StoreProduct.css';

class ProductBuyTabsComment extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
    <div>
      <div>
          <div>
               <p>这个喷雾的比那种单支装的方便些。</p>
          </div>
          <div className="el-store-product-comment-signature"> 
               <p>l***63（匿名）</p>
          </div>
          <div className="el-store-product-comment-card-date">
               <p>2020-01-14</p>
          </div>
          <div className="el-store-product-comment-border-hline"></div>
      </div>
      <div>
          <div>
               <p>很好，一直在用</p>
          </div>
          <div className="el-store-product-comment-signature">
               <p>l***63（匿名）</p>
          </div>
          <div className="el-store-product-comment-card-date">
               <p>2020-01-14</p>
          </div>
          <div className="el-store-product-comment-border-hline"></div>
          
      </div>
     </div>
    );
  }

}

export default ProductBuyTabsComment;

