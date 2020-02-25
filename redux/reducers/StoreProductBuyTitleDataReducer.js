import STORE_PRODUCT_BUY_TITLE_DATA_TYPE from '../types/StoreProductBuyTitleDataType.js';

const StoreProductBuyTitleDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_TITLE_DATA_TYPE:
            return Object.assign({}, state, { product_buy_title: action.data });
        default:
            return state;
    }
}


const initialState = {
    product_buy_title: ''
}

export default StoreProductBuyTitleDataReducer;
