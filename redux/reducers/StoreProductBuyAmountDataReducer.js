import STORE_PRODUCT_BUY_AMOUNT_DATA_TYPE from '../types/StoreProductBuyAmountDataType.js';

const StoreProductBuyAmountDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_AMOUNT_DATA_TYPE:
            return Object.assign({}, state, { product_buy_amount: action.data });
        default:
            return state;
    }
}


const initialState = {
    product_buy_amount: 0
}

export default StoreProductBuyAmountDataReducer;
