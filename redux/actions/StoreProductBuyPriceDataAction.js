import STORE_PRODUCT_BUY_PRICE_DATA_TYPE from "../types/StoreProductBuyPriceDataType.js";

const StoreProductBuyPriceDataAction = (product_buy_price)=> {
   return {
      type: STORE_PRODUCT_BUY_PRICE_DATA_TYPE,
      data: product_buy_price
   }
}

export default StoreProductBuyPriceDataAction;


