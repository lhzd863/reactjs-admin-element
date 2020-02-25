import STORE_PRODUCT_BUY_SELECT_IMG_URL_DATA_TYPE from '../types/StoreProductBuySelectImgUrlDataType.js';

const StoreProductBuySelectImgUrlDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_SELECT_IMG_URL_DATA_TYPE:
            return Object.assign({}, state, { product_buy_select_img_url: action.data });
        default:
            return state;
    }
}


const initialState = {
    product_buy_select_img_url: ''
}

export default StoreProductBuySelectImgUrlDataReducer;
