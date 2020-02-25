import STORE_PRODUCT_BUY_SELECT_IMG_URL_DATA_TYPE from "../types/StoreProductBuySelectImgUrlDataType.js";

const StoreProductBuySelectImgUrlDataAction = (product_buy_select_img_url)=> {
   return {
      type: STORE_PRODUCT_BUY_SELECT_IMG_URL_DATA_TYPE,
      data: product_buy_select_img_url
   }
}

export default StoreProductBuySelectImgUrlDataAction;


