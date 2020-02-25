import STORE_PRODUCT_BUY_AMOUNT_DATA_TYPE from "../types/StoreProductBuyAmountDataType.js";

const StoreProductBuyAmountDataAction = (product_buy_amount)=> {
   return {
      type: STORE_PRODUCT_BUY_AMOUNT_DATA_TYPE,
      data: product_buy_amount
   }
}

export default StoreProductBuyAmountDataAction;


