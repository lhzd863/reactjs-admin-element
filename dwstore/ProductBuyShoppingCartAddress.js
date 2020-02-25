import React, { Component } from 'react';

import { Layout,Button } from 'element-react';
import 'element-theme-default';


class ProductBuyShoppingCartAddress extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
      <div>
        <span><strong>选择收货地址</strong></span>
        <Layout.Row>
             <Layout.Col span={ 6 } offset={ 0 }>
                 <div className="el-store-product-buy-card-border-address" >
                    <span>上海上海（刘先生收）</span>
                    <div className="el-store-product-buy-card-hline">
                    </div>
                    <span>上海浦东新区唐镇培元新苑11号104室</span>
                    <div className="el-store-product-buy-card-border-footer">
                       <Button type="text" className="button">修改</Button>
                    </div>
                 </div>
             </Layout.Col>
             <Layout.Col span={ 6 } offset={ 0 }>
                 <div className="el-store-product-buy-card-border-address" >
                    <span>上海上海（刘先生收）</span>
                    <div className="el-store-product-buy-card-hline"></div>
                    <span>浦东唐镇培元新苑11号10415121035032</span>
                    <div className="el-store-product-buy-card-border-footer">
                       <Button type="text" className="button">修改</Button>
                    </div>
                 </div>
             </Layout.Col>
             <Layout.Col span={ 6 } offset={ 0 }>
                 <div className="el-store-product-buy-card-border-address" >
                    <span>上海上海（刘先生收）</span>
                    <div className="el-store-product-buy-card-hline"></div>
                    <span>浦东唐镇培元新苑11号10415121035032</span>
                    <div className="el-store-product-buy-card-border-footer">
                       <Button type="text" className="button">修改</Button>
                    </div>
                 </div>
             </Layout.Col>
             <Layout.Col span={ 6 } offset={ 0 }>
                 <div className="el-store-product-buy-card-border-address" >
                    <span>上海上海（刘先生收）</span>
                    <div className="el-store-product-buy-card-hline"></div>
                    <span>浦东唐镇培元新苑11号10415121035032</span>
                    <div className="el-store-product-buy-card-border-footer">
                       <Button type="text" className="button">修改</Button>
                    </div>
                 </div>
             </Layout.Col>
        </Layout.Row>
      </div>
    );
  }

}

export default ProductBuyShoppingCartAddress;

