import fetch from 'fetch-jsonp';
import axios from 'axios';

const endpoint = 'http://localhost:3500';
var local = 'http://localhost:3500/api/bubbles';

const bubbleServ = () => {
    return {
        getProducts: () => {
            return axios.get('http://localhost:3500/api/bubbles')
            .then(res => {
                return res.data
            })
        }

    };
};

export default bubbleServ();