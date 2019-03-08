import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Navbar from './navbar/Navbar.js';
import BubblesContainer from './BubblesContainer/BubblesContainer.js';
import Home from './Home/Home'
import BubbleDetails from './BubbleDetails/BubbleDetails.js';
import Bundle from './Bundle/Bundle'
import BundleDetailsList from './BundleDetailsList/BundleDetailsList.js'
import About from './About/About.js'
import Cart from './Cart/Cart.js'
import Checkout from './Checkout/Checkout.js'
import Orders from './Orders/Orders.js'
import NotFound from './NotFound/NotFound.js'


const App = () => {
    return (
        <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/bubbles" component={ BubblesContainer } />
            <Route exact path="/bubbles/:bubbleId" component={ BubbleDetails } />
            <Route exact path="/bundle" component={ Bundle } />
            <Route exact path="/bundle/:bundleId" component={ BundleDetailsList } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/cart" component={ Cart } />
            <Route exact path="/checkout" component={ Checkout } />
            <Route exact path="/orders" component= { Orders} />
            <Route component={ NotFound } />
        </Switch>
        </div>
    )
};

export default App;
