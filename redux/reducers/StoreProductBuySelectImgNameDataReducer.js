import STORE_PRODUCT_BUY_SELECT_IMG_NAME_DATA_TYPE from '../types/StoreProductBuySelectImgNameDataType.js';

const StoreProductBuySelectImgNameDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_SELECT_IMG_NAME_DATA_TYPE:
            return Object.assign({}, state, { product_buy_select_img_name: action.data });
        default:
            return state;
    }
}


const initialState = {
    product_buy_select_img_name: ''
}

export default StoreProductBuySelectImgNameDataReducer;
