import {connect} from 'react-redux';
import ProductBuyInfoWrapper from '../../dwstore/ProductBuyInfo.js';

import StoreProductBuyPriceDataAction from '../actions/StoreProductBuyPriceDataAction.js';
import StoreProductTitlePriceDataAction from '../actions/StoreProductBuyTitleDataAction.js';
import StoreProductBuySelectImgNameDataAction from '../actions/StoreProductBuySelectImgNameDataAction.js';
import StoreProductBuySelectImgUrlDataAction from '../actions/StoreProductBuySelectImgUrlDataAction.js';
import StoreProductBuySelectImgVideoDataAction from '../actions/StoreProductBuySelectImgVideoDataAction.js';
import StoreProductBuySelectImgArrayDataAction from '../actions/StoreProductBuySelectImgArrayDataAction.js';
import StoreProductBuyAmountDataAction from '../actions/StoreProductBuyAmountDataAction.js';

const mapStateToProps = state => {
    console.log(state);
    var obj0 = [];
    var i=0,len=0;
    for (i=0,len=state.StoreProductBuySelectImgArrayDataReducer.length;i<len;i++) {
         obj0.push(state.StoreProductBuySelectImgArrayDataReducer[i]);
    }
    return {
        product_buy_title: state.StoreProductBuyTitleDataReducer.product_buy_title,
        product_buy_price: state.StoreProductBuyPriceDataReducer.product_buy_price,
        product_buy_select_img_name: state.StoreProductBuySelectImgNameDataReducer.product_buy_select_img_name,
        product_buy_select_img_url: state.StoreProductBuySelectImgNameDataReducer.product_buy_select_img_url,
        product_buy_select_img_video: state.StoreProductBuySelectImgVideoDataReducer.product_buy_select_img_video,
        product_buy_select_img_array: obj0,
        product_buy_amount: state.StoreProductBuyAmountDataReducer.product_buy_amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        productBuyTitleDataCreate: (product_buy_title)=> {
            dispatch(StoreProductTitlePriceDataAction(product_buy_title))
        },
        productBuyPriceDataCreate: (product_buy_price) => {
            dispatch(StoreProductBuyPriceDataAction(product_buy_price))
        },
        productBuySelectImgNameDataCreate: (product_buy_select_img_name) => {
            dispatch(StoreProductBuySelectImgNameDataAction(product_buy_select_img_name))
        },
        productBuySelectImgUrlDataCreate: (product_buy_select_img_url) => {
            dispatch(StoreProductBuySelectImgUrlDataAction(product_buy_select_img_url))
        },
        productBuySelectImgVideoDataCreate: (product_buy_select_img_video) => {
            dispatch(StoreProductBuySelectImgVideoDataAction(product_buy_select_img_video))
        },
        productBuySelectImgArrayDataCreate: (product_buy_select_img_array) => {
            dispatch(StoreProductBuySelectImgArrayDataAction(product_buy_select_img_array))
        },
        productBuyAmountDataCreate: (product_buy_amount) => {
            dispatch(StoreProductBuyAmountDataAction(product_buy_amount))
        }
    }
}

const ProductBuyInfoContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductBuyInfoWrapper);

export default ProductBuyInfoContainers;

