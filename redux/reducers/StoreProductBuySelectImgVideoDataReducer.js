import STORE_PRODUCT_BUY_SELECT_IMG_VIDEO_DATA_TYPE from '../types/StoreProductBuySelectImgVideoDataType.js';

const StoreProductBuySelectImgVideoDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_SELECT_IMG_VIDEO_DATA_TYPE:
            return Object.assign({}, state, { product_buy_select_img_video: action.data });
        default:
            return state;
    }
}


const initialState = {
    product_buy_select_img_video: ''
}

export default StoreProductBuySelectImgVideoDataReducer;
