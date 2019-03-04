import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import BubblesContainer from './BubblesContainer/BubblesContainer';
import Home from './Home/Home'
import BubbleDetails from './BubbleDetails/BubbleDetails';
import Bundle from './Bundle/Bundle'
import BundleDetailsList from './BundleDetailsList/BundleDetailsList'
import About from './About/About'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import Orders from './Orders/Orders'


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
            
        </Switch>
        </div>
    )
};

export default App;
