/**
 * Created by myeongsic on 2017. 5. 31..
 */
const request = require('request');

request.post({url: 'http://localhost:3000/post', form: {key: '고구마'}},
    function (err, httpResponse, body) {

    console.log(body)
})