import STORE_PRODUCT_BUY_CLASSIFY_DATA_TYPE from '../types/StoreProductBuyClassifyDataType.js';

const StoreProductBuyClassifyDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case STORE_PRODUCT_BUY_CLASSIFY_DATA_TYPE:
            return Object.assign({}, state, { product_buy_classify: action.data });
        default:
            return state;
    }
}


const initialState = {
    product_buy_classify: ''
}

export default StoreProductBuyClassifyDataReducer;
