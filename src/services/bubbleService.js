import fetch from 'fetch-jsonp';
import axios from 'axios';

console.log(`${ process.env.PORT }`);

const bubbleServ = () => {
    return {
        getProducts: () => {
            return axios.get('http://localhost:3500/api/bubbles')
            .then(res => {
                return res.data
            })
        },
        getSingleProduct: (id) => {
            return axios.get('http://localhost:3500/api/bubbles/' + id)
            .then(res => {
                return res.data;
            })
        },
        getBundles: () => {
            return axios.get('http://localhost:3500/api/bundles')
            .then(res => {
                return res.data;
            })
        },
        getSingleBundle: (id) => {
            return axios.get('http://localhost:3500/api/bundles/' + id)
            .then(res => {
                return res.data;
            })
        },
        getOrders: (tele) => {
            return axios.get('http://localhost:3500/api/orders/' + tele)
            .then(res => {
                return res.data;
            })
            .catch(error => {
                return console.log(error)
            }
            )
        },
        postOrder: (info, items) => {
            return axios.post('http://localhost:3500/api/orders/' + info.telephone,{
                name: info.name,
                address: info.address,
                city: info.city,
                telephone: info.telephone,
                postal: info.postal,
                items: items
            })
            .then(function (response) {
                return response.request.status;
            })
        }
    };
};

export default bubbleServ();