import STORE_PRODUCT_BUY_SELECT_IMG_ARRAY_DATA_TYPE from "../types/StoreProductBuySelectImgArrayDataType.js";

const StoreProductBuySelectImgArrayDataAction = (product_buy_select_img_array)=> {
   return {
      type: STORE_PRODUCT_BUY_SELECT_IMG_ARRAY_DATA_TYPE,
      product_buy_select_img_array
   }
}

export default StoreProductBuySelectImgArrayDataAction;


