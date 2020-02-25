import {combineReducers} from 'redux';
import userAliasReducer from './userAliasReducer.js';
import userIdReducer from './userIdReducer.js';
import userMailReducer from './userMailReducer.js';
import userNameReducer from './userNameReducer.js';
import appQrDecodeReducer from './appQrDecodeReducer.js';
import appQrcodeReducer from './appQrcodeReducer.js';
import myDownloadReducer from './myDownloadReducer.js';
import ArrayDataReducer from './ArrayDataReducer.js';
import ArrayData0Reducer from './ArrayData0Reducer.js';
import ArrayData1Reducer from './ArrayData1Reducer.js';
import ArrayData2Reducer from './ArrayData2Reducer.js';
import ArrayData3Reducer from './ArrayData3Reducer.js';
import CtitleDataReducer from './CtitleDataReducer.js';
import LeastsqAvalReducer from './LeastsqAvalReducer.js';
import LeastsqBvalReducer from './LeastsqBvalReducer.js';
import LeastsqCalvalReducer from './LeastsqCalvalReducer.js';
import LeastsqUrlReducer from './LeastsqUrlReducer.js';
import DisplayNameReducer from './DisplayNameDataReducer.js';
import DisplayConsoleDataReducer from './DisplayConsoleDataReducer.js';
import ArrayConsoleDataReducer from './ArrayConsoleDataReducer.js';
import DialogVisibleDataReducer from './DialogVisibleDataReducer.js';
import ChartLabelDataReducer from './ChartLabelDataReducer.js';
import ChartLabelPositionDataReducer from './ChartLabelPositionDataReducer.js';
import ChartLabelEnableDataReducer from './ChartLabelEnableDataReducer.js';
import ChartTitleDataReducer from './ChartTitleDataReducer.js';
import ChartTitlePositionDataReducer from './ChartTitlePositionDataReducer.js';
import ChartTitleEnableDataReducer from './ChartTitleEnableDataReducer.js';
import ChartXaxisDataReducer from './ChartXaxisDataReducer.js';
import ChartXaxisEnableDataReducer from './ChartXaxisEnableDataReducer.js';
import ChartYaxisDataReducer from './ChartYaxisDataReducer.js';
import ChartYaxisEnableDataReducer from './ChartYaxisEnableDataReducer.js';
import ChartWindowHeightDataReducer from './ChartWindowHeightDataReducer.js';
import ChartWindowImgHeightDataReducer from './ChartWindowImgHeightDataReducer.js';
import ChartWindowWidthDataReducer from './ChartWindowWidthDataReducer.js';
import ChartWindowImgWidthDataReducer from './ChartWindowImgWidthDataReducer.js';
import ChartLeastsqConsoleExpressEnableDataReducer from './ChartLeastsqConsoleExpressEnableDataReducer.js';
import ChartLeastsqRealValueDataReducer from './ChartLeastsqRealValueDataReducer.js';
import ChartLeastsqRealValueResultEnableDataReducer from './ChartLeastsqRealValueResultEnableDataReducer.js';
import AppAudioPlayDataReducer from './AppAudioPlayDataReducer.js';
import ChartFitLineOptimizedTimeDataReducer from './ChartFitLineOptimizedTimeDataReducer.js';
import ChartFitLineLossValueDataReducer from './ChartFitLineLossValueDataReducer.js';
import LoadingEnableDataReducer from './LoadingEnableDataReducer.js';
import FieldCnNameDataReducer from './FieldCnNameDataReducer.js';
import FieldEnNameDataReducer from './FieldEnNameDataReducer.js';
import FieldTypeDataReducer from './FieldTypeDataReducer.js';
import FieldTagDataReducer from './FieldTagDataReducer.js';
import FieldSourceTextDataReducer from './FieldSourceTextDataReducer.js';
import FieldTargetTextDataReducer from './FieldTargetTextDataReducer.js';

import StoreProductBuyPriceDataReducer from './StoreProductBuyPriceDataReducer.js';
import StoreProductBuySelectImgNameDataReducer from './StoreProductBuySelectImgNameDataReducer.js';
import StoreProductBuySelectImgUrlDataReducer from './StoreProductBuySelectImgUrlDataReducer.js';
import StoreProductBuySelectImgVideoDataReducer from './StoreProductBuySelectImgVideoDataReducer.js';
import StoreProductBuyTitleDataReducer from './StoreProductBuyTitleDataReducer.js';
import StoreProductBuySelectImgArrayDataReducer from './StoreProductBuySelectImgArrayDataReducer.js';
import StoreProductBuyAmountDataReducer from './StoreProductBuyAmountDataReducer.js';
import StoreProductBuyClassifyDataReducer from './StoreProductBuyClassifyDataReducer.js';


export const finalReducer = combineReducers({
   StoreProductBuyAmountDataReducer,
   StoreProductBuyClassifyDataReducer,
   StoreProductBuySelectImgArrayDataReducer,
   StoreProductBuyPriceDataReducer,
   StoreProductBuySelectImgNameDataReducer,
   StoreProductBuySelectImgUrlDataReducer,
   StoreProductBuySelectImgVideoDataReducer,
   StoreProductBuyTitleDataReducer,
   userNameReducer,
   userIdReducer,
   userAliasReducer,
   userMailReducer,
   appQrDecodeReducer,
   appQrcodeReducer,
   myDownloadReducer,
   ArrayDataReducer,
   ArrayData0Reducer,
   ArrayData1Reducer,
   ArrayData2Reducer,
   ArrayData3Reducer,
   CtitleDataReducer,
   LeastsqAvalReducer,
   LeastsqBvalReducer,
   LeastsqCalvalReducer,
   LeastsqUrlReducer,
   DisplayNameReducer,
   DisplayConsoleDataReducer,
   ArrayConsoleDataReducer,
   DialogVisibleDataReducer,
   ChartLabelEnableDataReducer,
   ChartLabelDataReducer,
   ChartLabelPositionDataReducer,
   ChartTitleEnableDataReducer,
   ChartTitleDataReducer,
   ChartTitlePositionDataReducer,
   ChartXaxisDataReducer,
   ChartXaxisEnableDataReducer,
   ChartYaxisDataReducer,
   ChartYaxisEnableDataReducer,
   ChartWindowHeightDataReducer,
   ChartWindowWidthDataReducer,
   ChartWindowImgHeightDataReducer,
   ChartWindowImgWidthDataReducer,
   ChartLeastsqConsoleExpressEnableDataReducer,
   ChartLeastsqRealValueDataReducer,
   ChartLeastsqRealValueResultEnableDataReducer,
   AppAudioPlayDataReducer,
   ChartFitLineOptimizedTimeDataReducer,
   LoadingEnableDataReducer,
   ChartFitLineLossValueDataReducer,
   FieldCnNameDataReducer,
   FieldTypeDataReducer,
   FieldEnNameDataReducer,
   FieldTagDataReducer,
   FieldSourceTextDataReducer,
   FieldTargetTextDataReducer
});

