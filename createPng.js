/**
 * Created by myeongsic on 2017. 5. 31..
 */

const request = require('request');
const fs = require('fs');

request('http://www.matcl.com/files/attach/images/2791205/936/827/002/f1848ce9d23c5181eb3ed7284b7bcaf5.png').pipe(fs.createWriteStream('doodle.png'))