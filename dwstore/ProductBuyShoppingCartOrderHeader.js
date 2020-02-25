import React, { Component } from 'react';

import 'element-theme-default';

class ProductBuyShoppingCartOrderHeader extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
      <div>
         <span><strong>确认订单信息</strong></span>
         <table border="0">
             <tr>
                 <th olspan="10" >店铺宝贝</th>
                 <th olspan="8" >商品属性</th>
                 <th olspan="2" >单价</th>
                 <th olspan="2" >数量</th>
                 <th olspan="2" >优惠方式</th>
                 <th olspan="2" >小计</th>
             </tr>
         </table>
      </div>
    );
  }

}

export default ProductBuyShoppingCartOrderHeader;

