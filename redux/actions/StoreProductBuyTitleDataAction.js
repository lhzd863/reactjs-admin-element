import STORE_PRODUCT_BUY_TITLE_DATA_TYPE from "../types/StoreProductBuyTitleDataType.js";

const StoreProductBuyTitleDataAction = (product_buy_title)=> {
   return {
      type: STORE_PRODUCT_BUY_TITLE_DATA_TYPE,
      data: product_buy_title
   }
}

export default StoreProductBuyTitleDataAction;


