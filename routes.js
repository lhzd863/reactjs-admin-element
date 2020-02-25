import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import StoreProductBuy from './dwstore/StoreProductBuy.js';
import StoreProductBuyShoppingCart from './dwstore/StoreProductBuyShoppingCart.js';
import VideoInfo from './dwstore/VideoInfo.js';


class Routes extends React.Component {

  render(){
        return (
          <div>
             <Router>
                 <Switch>
                     <Route exact path="/" component={StoreProductBuy} />
                     <Route exact path="/cart" component={StoreProductBuyShoppingCart} />
                     <Route exact path="/video" component={VideoInfo} />
                 </Switch>
             </Router>
          </div>
        )
  }

}

export default Routes;

