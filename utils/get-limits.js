//https://api.binance.com/api/v1/exchangeInfo

//TODO сделать из этого человеческий модуль получения ограничений пары

let request = require('request-promise-native');

request('https://api.binance.com/api/v1/exchangeInfo')
    .then(function (htmlString) {
        //console.log(Date() + JSON.parse(htmlString).symbols);
        console.log(JSON.parse(htmlString).symbols.filter(symbol => symbol.symbol === 'TRXBTC'));
    })
    .catch(function (err) {
        console.log('!! ERROR getting Exchange Info');
        console.log(err);
    });
}
