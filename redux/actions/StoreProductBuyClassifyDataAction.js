import STORE_PRODUCT_BUY_CLASSIFY_DATA_TYPE from "../types/StoreProductBuyClassifyDataType.js";

const StoreProductBuyClassifyDataAction = (product_buy_classify)=> {
   return {
      type: STORE_PRODUCT_BUY_CLASSIFY_DATA_TYPE,
      data: product_buy_classify
   }
}

export default StoreProductBuyClassifyDataAction;


