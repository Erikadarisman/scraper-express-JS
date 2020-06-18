
const response = require('./response');
// const rp = require('request-promise')

var Xray = require('x-ray');
var x = Xray();

exports.welcome = function(req, res){
    response.ok('welcome in Scrap app with express js', res);
}

exports.getAllPage = function(req, res){
    x('https://myanimelist.net/topanime.php','td.title.al',[{
        title: 'div a',
        link: 'a@href',
        image: x('a@href', 'td.borderClass a img@data-src'),
        synopsis:x('a@href', ['div .js-scrollfix-bottom-rel [itemprop]']),

    }])(function (err, data) {
        // console.log(zdata);
        response.ok(data,res)
    })
    

}
