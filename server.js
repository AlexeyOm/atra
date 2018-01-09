setInterval(logTime, 500);
let request = require('request-promise-native');

function logTime() {
    //console.log("hmm" + Date());
    
    request('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
    .then(function (htmlString) {
        console.log(Date() + JSON.parse(htmlString).price)
    })
    .catch(function (err) {
        console.log(err);
    });
    
}

