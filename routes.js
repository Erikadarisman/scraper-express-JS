
module.exports = function (app){
    const scrap = require('./scrapController');
    app.get('/', scrap.welcome);
    app.get('/getallpage', scrap.getAllPage);
}