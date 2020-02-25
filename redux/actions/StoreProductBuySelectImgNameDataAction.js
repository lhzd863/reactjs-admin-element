import STORE_PRODUCT_BUY_SELECT_IMG_NAME_DATA_TYPE from "../types/StoreProductBuySelectImgNameDataType.js";

const StoreProductBuySelectImgNameDataAction = (product_buy_select_img_name)=> {
   return {
      type: STORE_PRODUCT_BUY_SELECT_IMG_NAME_DATA_TYPE,
      data: product_buy_select_img_name
   }
}

export default StoreProductBuySelectImgNameDataAction;


