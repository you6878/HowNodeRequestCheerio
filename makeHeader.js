/**
 * Created by myeongsic on 2017. 5. 31..
 */
const request = require('request');

var options = {
    url: 'http://localhost:3000/get',
    headers: {
        'AppKey': 'dadfasdfasdf'
    }
};


request(options);