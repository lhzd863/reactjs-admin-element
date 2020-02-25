import STORE_PRODUCT_BUY_PRICE_DATA_TYPE from '../types/StoreProductBuyPriceDataType.js';

const StoreProductBuyPriceDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_PRICE_DATA_TYPE:
            return Object.assign({}, state, { product_buy_price: action.data });
        default:
            return state;
    }
}


const initialState = {
    product_buy_price: 0
}

export default StoreProductBuyPriceDataReducer;
