import STORE_PRODUCT_BUY_SELECT_IMG_ARRAY_DATA_TYPE from '../types/StoreProductBuySelectImgArrayDataType.js';

const StoreProductBuySelectImgArrayDataReducer= (state = initialState.product_buy_select_img_array,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_SELECT_IMG_ARRAY_DATA_TYPE:
            return action.product_buy_select_img_array;
        default:
            return state;
    }
}


const initialState = {
    product_buy_select_img_array: []
}

export default StoreProductBuySelectImgArrayDataReducer;
