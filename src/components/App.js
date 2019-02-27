import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import BubblesContainer from './BubblesContainer/BubblesContainer';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" render={ () => ( 
                <Navbar/>
            )}/>
            <Route path="/bubbles" render={ () => ( 
                <div>
                    <Navbar/>
                    <BubblesContainer/>
                </div>
            )}/>
            <Route render={({ location }) => {
                <div> 
                    <div>404!</div>
                    <div>{location.pathname} was not found!</div>
                </div>
            }} />
            }
        </Switch>
    )
};

export default App;
