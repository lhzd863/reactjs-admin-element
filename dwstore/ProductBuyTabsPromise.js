import React, { Component } from 'react';

import { Layout } from 'element-react';
import './StoreProduct.css';

class ProductBuyTabsPromise extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello'}
  }

  render() {
    return (
    <Layout.Row>
      <Layout.Col span={ 7 } offset={ 0 }>
             <Layout.Row>
                 <Layout.Col span={ 3 } offset={ 0 } >
                     <div className="el-store-product-promise-card-img">
                         <img src="http://122.51.161.53:8080/img/store/promise-0.JPG" style={{width:'50px',height:'50px'}} alt="" />
                     </div>
                 </Layout.Col>
                 <Layout.Col span={ 1} offset={ 2 }>
                     <div className="el-store-product-promise-card-vline" style={{align:'center'}}> </div>
                 </Layout.Col>
                 <Layout.Col span={ 3 } offset={ 2 }>
                     <div className="el-store-product-promise-card-text">
                        出售均为正品,承诺提供“正品保障”服务.
                     </div>
                 </Layout.Col>
             </Layout.Row>
      </Layout.Col>
      <Layout.Col span={ 1 } offset={ 0 }>
             <div className="el-store-product-promise-card-border-vline"> </div>
      </Layout.Col>
      <Layout.Col span={ 7 } offset={ 0 }>
          <Layout.Row>
                 <Layout.Col span={ 3 } offset={ 0 } >
                     <div className="el-store-product-promise-card-img">
                         <img src="http://122.51.161.53:8080/img/store/promise-1.JPG" style={{width:'50px',height:'50px'}}  alt="" />
                     </div>
                 </Layout.Col>
                 <Layout.Col span={ 1} offset={ 2 }>
                     <div className="el-store-product-promise-card-vline" style={{align:'center'}}> </div>
                 </Layout.Col>
                 <Layout.Col span={ 3 } offset={ 2 }>
                     <div className="el-store-product-promise-card-text">
                        出售均为正品,承诺提供“正品保障”服务.
                     </div>
                 </Layout.Col>
             </Layout.Row>
      </Layout.Col>
      <Layout.Col span={ 1 } offset={ 0 }>
           <div className="el-store-product-promise-card-border-vline"> </div>
      </Layout.Col>
      <Layout.Col span={ 7 } offset={ 0 }>
          <Layout.Row>
                 <Layout.Col span={ 3 } offset={ 0 } >
                     <div className="el-store-product-promise-card-img">
                         <img src="http://122.51.161.53:8080/img/store/promise-2.JPG" style={{width:'50px',height:'50px'}} alt="" />
                     </div>
                 </Layout.Col>
                 <Layout.Col span={ 1} offset={ 2 }>
                     <div className="el-store-product-promise-card-vline" style={{align:'center'}}> </div>
                 </Layout.Col>
                 <Layout.Col span={ 3 } offset={ 2 }>
                     <div className="el-store-product-promise-card-text">
                        出售均为正品,承诺提供“正品保障”服务.
                     </div>
                 </Layout.Col>
             </Layout.Row>
      </Layout.Col>
    </Layout.Row>
    );
  }

}

export default ProductBuyTabsPromise;

