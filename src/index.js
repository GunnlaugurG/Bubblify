import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import '../styles/site.css';
import '../styles/site.less';


const Index = () => {
    return <> <App/> </>
};

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
