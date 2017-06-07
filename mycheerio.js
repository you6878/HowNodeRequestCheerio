/**
 * Created by myeongsic on 2017. 6. 8..
 */


const cheerio = require('cheerio');
const $ = cheerio.load('<ul id="fruits"> <li class="apple">AppleText</li> <li class="orange">Orange</li> <li class="pear1">Pear</li> </ul>');

var a= $('.apple', '#fruits').text();
//=> Apple

var b= $('ul .pear1').attr('class');
//=> pear

var c = $('ul').html();

console.log(a)
console.log(b)
console.log(c)