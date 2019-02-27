import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import BubblesContainer from './BubblesContainer/BubblesContainer';
import Home from './Home/Home'

const App = () => {
    return (
        <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/bubbles" component={ BubblesContainer } />
        </Switch>
        </div>
    )
};

export default App;
