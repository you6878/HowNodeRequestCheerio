/**
 * Created by myeongsic on 2017. 6. 8..
 */

const request = require('request')
const cheerio = require('cheerio')



request.get('https://www.naver.com',function (err, httpResponse, html) {
    const $ = cheerio.load(html)


    var rankList = $('div.ah_roll_area ul li')

    rankList.each(function (i, e) {
        //console.log($(e).html())
        var rank = $(e).children('a').children('span.ah_r').text()
        var text = $(e).children('a').children('span.ah_k').text()
        console.log(rank,'위는',text,'입니다.')
    })

})