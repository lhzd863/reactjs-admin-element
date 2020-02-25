import React, { Component } from 'react';

import { InputNumber } from 'element-react';
import 'element-theme-default';

class ProductBuyShoppingCartOrder extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
      <div>
         <span><strong>确认订单信息</strong></span>
         <table border="0" className="el-store-product-buy-order-table">
             <thead border="1" >
                 <th olspan="6" className="el-store-product-buy-order-table-col1"><div>店铺宝贝</div><div className="el-store-product-buy-order-table-hline"></div></th>
                 <th olspan="4" className="el-store-product-buy-order-table-col2"><div>商品属性</div><div className="el-store-product-buy-order-table-hline"></div></th>
                 <th olspan="3" className="el-store-product-buy-order-table-col3"><div>单价</div><div className="el-store-product-buy-order-table-hline"></div></th>
                 <th olspan="2" className="el-store-product-buy-order-table-col4"><div>数量</div><div className="el-store-product-buy-order-table-hline"></div></th>
                 <th olspan="3" className="el-store-product-buy-order-table-col5"><div>优惠方式</div><div className="el-store-product-buy-order-table-hline"></div></th>
                 <th olspan="2" className="el-store-product-buy-order-table-col6"><div>小计</div><div className="el-store-product-buy-order-table-hline"></div></th>
             </thead>
             <tbody>
                 <tr>
                     <td><div>【免息】Apple/苹果16英寸新款MacBook Pro 6核九代i7处理器16GB内存512GB固态硬盘带触控栏和触控ID视网膜屏
2019年11月新品 只为满足专业用户的追求</div></td>
                     <td><div>颜色分类：银色</div></td>
                     <td><div>20999.00 </div></td>
                     <td><InputNumber defaultValue={1} > </InputNumber></td>
                     <td><div>省3000:火爆促销</div></td>
                     <td><div style={{color:'red'}}>17999.00</div></td>
                 </tr>
             </tbody>
         </table>
      </div>
    );
  }

}

export default ProductBuyShoppingCartOrder;

