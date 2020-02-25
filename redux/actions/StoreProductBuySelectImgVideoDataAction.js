import STORE_PRODUCT_BUY_SELECT_IMG_VIDEO_DATA_TYPE from "../types/StoreProductBuySelectImgUrlDataType.js";

const StoreProductBuySelectImgVideoDataAction = (product_buy_select_img_video)=> {
   return {
      type: STORE_PRODUCT_BUY_SELECT_IMG_VIDEO_DATA_TYPE,
      data: product_buy_select_img_video
   }
}

export default StoreProductBuySelectImgVideoDataAction;


