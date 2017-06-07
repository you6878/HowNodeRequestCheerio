/**
 * Created by myeongsic on 2017. 5. 31..
 */
const request = require('request')

request.get('http://localhost:3000/get', {
    'auth': {
        'user': 'username',
        'pass': 'password',
        'sendImmediately': true
    }
});