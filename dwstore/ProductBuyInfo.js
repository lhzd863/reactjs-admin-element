import React, { Component } from 'react';

import { Layout, Button, Form, Select, InputNumber} from 'element-react';
import { Player } from 'video-react';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import "../../node_modules/video-react/dist/video-react.css"; 

import './StoreProduct.css';

class ProductBuyInfo extends Component {

  constructor(props) {
        super(props)
        this.state = { title:'Hello',
           form: {
             name: '',
             region: '',
             date1: null,
             date2: null,
             delivery: false,
             type: [],
             resource: '',
             desc: ''
           },
           store_product_buy_select_img_seq:'2',
           store_product_buy_select_img_url:'http://122.51.161.53:8080/img/photo3.jpg',
           store_product_buy_select_img_video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
           store_product_buy_select_img_array:['http://122.51.161.53:8080/img/photo1.png','http://122.51.161.53:8080/img/photo2.png','http://122.51.161.53:8080/img/photo3.jpg','http://122.51.161.53:8080/img/photo4.jpg','http://122.51.161.53:8080/img/photo3.jpg']
        }
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
  }

  toggleHover(e){
     this.load();
     if(e==='0'){
        this.setState({store_product_buy_select_img_seq:'0',store_product_buy_select_img_url:this.state.store_product_buy_select_img_array[0],store_product_buy_select_img_video:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'});
     }else if(e==='1'){
        this.setState({store_product_buy_select_img_seq:'1',store_product_buy_select_img_url:this.state.store_product_buy_select_img_array[1],store_product_buy_select_img_video:'http://media.w3.org/2010/05/bunny/movie.mp4'});
     }else if(e==='2'){
        this.setState({store_product_buy_select_img_seq:'2',store_product_buy_select_img_url:this.state.store_product_buy_select_img_array[2],store_product_buy_select_img_video:'http://media.w3.org/2010/05/bunny/trailer.mp4'});
     }else if(e==='3'){
        this.setState({store_product_buy_select_img_seq:'3',store_product_buy_select_img_url:this.state.store_product_buy_select_img_array[3],store_product_buy_select_img_video:'http://media.w3.org/2010/05/bunny/movie.mp4'});
     }
  }

  componentDidMount(){
     this.props.productBuyTitleDataCreate("仁和 生理性海水鼻腔喷雾器 洗鼻器鼻炎喷剂洗鼻盐海盐水过敏性慢性鼻窦炎鼻塞鼻子冲洗器清洗器 成人儿童婴儿专用 60ml/瓶【买2送1】");
     this.props.productBuyPriceDataCreate(300);
     this.props.productBuySelectImgNameDataCreate("1");
     this.props.productBuyAmountDataCreate(1);  
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  handleSubmit(){
    console.log(this.props.product_buy_title);
    console.log(this.props.product_buy_amount);
    console.log(this.props.product_buy_price)
    
  }

  onChangeInputNumber(e){
    this.props.productBuyAmountDataCreate(e);
  }

  render() {
    const const_player_url = this.state.store_product_buy_select_img_url;
    const const_player_video = this.state.store_product_buy_select_img_video;
    const const_img_0 = this.state.store_product_buy_select_img_array[0];    
    const const_img_1 = this.state.store_product_buy_select_img_array[1];
    const const_img_2 = this.state.store_product_buy_select_img_array[2];
    const const_img_3 = this.state.store_product_buy_select_img_array[3];
    const const_img_class_0 = (this.state.store_product_buy_select_img_seq==='0')?'el-store-product-img':''; 
    const const_img_class_1 = (this.state.store_product_buy_select_img_seq==='1')?'el-store-product-img':'';
    const const_img_class_2 = (this.state.store_product_buy_select_img_seq==='2')?'el-store-product-img':'';
    const const_img_class_3 = (this.state.store_product_buy_select_img_seq==='3')?'el-store-product-img':'';
    const const_product_buy_title = this.props.product_buy_title;
    const const_product_buy_price = this.props.product_buy_price;

    return (
   <Layout.Row>
      <Layout.Col span={ 8 } offset={ 0 }>
            <Player
                ref={player => {this.player = player;}} 
                playsInline
                poster={const_player_url}
                src={const_player_video}
            />
            <div style={{ padding: 14 }}> </div>
            <Layout.Row >
               <Layout.Col span="2" offset={ 0 } >
                      <img className={const_img_class_0} src={const_img_0} style={{width:'80px',height:'80px'}} onMouseEnter={()=>this.toggleHover('0')} alt="1"/>
               </Layout.Col>
               <Layout.Col span="2" offset={ 3 }>
                      <img className={const_img_class_1} src={const_img_1} style={{width:'80px',height:'80px'}} onMouseEnter={()=>this.toggleHover('1')} alt="2"/>
               </Layout.Col>
               <Layout.Col span="2" offset={ 3 }>
                      <img className={const_img_class_2} src={const_img_2} style={{width:'80px',height:'80px'}} onMouseEnter={()=>this.toggleHover('2')} alt="3"/>
               </Layout.Col>
               <Layout.Col span="2" offset={ 3 }>
                      <img className={const_img_class_3} src={const_img_3} style={{width:'80px',height:'80px'}} onMouseEnter={()=>this.toggleHover('3')} alt="4"/>
               </Layout.Col>
            </Layout.Row>
      </Layout.Col>
      <Layout.Col span={ 10 } offset={ 0 }>
        <Form model={this.state.form} labelWidth="80" >
          <Form.Item>
             <div><strong>{const_product_buy_title}</strong></div>
             <div className="el-store-price">
                  <Form.Item label="价格:">
                         <div style={{fontSize: '25px'}}>¥ {const_product_buy_price}</div>
                  </Form.Item>
             </div>
             <Form.Item label="即时配送" style={{ padding: 14 }} >
                 <Select value={this.state.form.region} placeholder="请选择活动区域">
                    <Select.Option label="区域一" value="shanghai"></Select.Option>
                    <Select.Option label="区域二" value="beijing"></Select.Option>
                 </Select>
             </Form.Item>
             <Form.Item label="数量" style={{ padding: 14 }} >
                 <InputNumber min="1" max="1000" defaultValue={1} onChange={(e)=>{this.onChangeInputNumber(e)}}></InputNumber>
             </Form.Item>
             <Form.Item style={{ padding: 14 }} >
                 <Button type="primary" onClick={()=>{this.handleSubmit()}}>加入购物车</Button>
             </Form.Item>
             <Form.Item style={{ padding: 14 }} label="配送范围" >
                 <div>送货范围仅限上海地区(生鲜类别仅限部分地区)</div>
             </Form.Item>
             <Form.Item>
                 <div>检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息 </div>
             </Form.Item>
          </Form.Item>
       </Form>
      </Layout.Col>
   </Layout.Row>
   

    );
  }

  static propTypes = {
    product_buy_title: PropTypes.string,
    productBuyTitleDataCreate: PropTypes.func,
    product_buy_price: PropTypes.number,
    productBuyPriceDataCreate: PropTypes.func,
    product_buy_select_img_name: PropTypes.string,
    productBuySelectImgNameDataCreate: PropTypes.func,
    product_buy_select_img_url: PropTypes.string,
    productBuySelectImgUrlDataCreate: PropTypes.func,
    product_buy_select_img_video: PropTypes.string,
    productBuySelectImgVideoDataCreate: PropTypes.func,
    product_buy_select_img_array: PropTypes.array,
    productBuySelectImgArrayDataCreate: PropTypes.func,
    product_buy_amount: PropTypes.number,
    productBuyAmountDataCreate: PropTypes.func,
  }

}
const ProductBuyInfoWrapper = createForm()(ProductBuyInfo);
export default ProductBuyInfoWrapper;

