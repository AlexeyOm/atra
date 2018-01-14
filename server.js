let APIKey = 'xdH4QD057qQJo04ZGD49NkxZy83udBhvotZHT2Y1yqgXw4wKGZqTl58l1YT68rqu';
let APISecret = 'PBWd3H4uHZSMtXVq2RcXVWygBwq4ZWcPazQmpViPNe9QHyIEwDQxM4CDxayYFRwx';
let APIURL = 'https://api.binance.com/api/v3/order/test';
let orderTestURL = '';//v3/order/test';


let sha256 = require('js-sha256');
let opt = require('./settings/api.js');
let calc = require('./strategy/price-calc.js');

console.log(calc.macro(0,100,2,25,10,'BUY',1,1) );

//setInterval(logTime, 500);
let request = require('request-promise-native');

let symbol = 'TRXBTC';
let side = 'BUY';
let type = 'LIMIT';
let timeInForce = 'GTC';
let quantity = 10000;
let price = 0.00000100;
let timestamp = Date.now();

let queryString = `symbol=${symbol}&side=${side}&type=${type}&` + 
                  `timeInForce=${timeInForce}&quantity=${quantity}&` +
                  `price=${price}&timestamp=${timestamp}`;

let signature = sha256.hmac(APISecret, queryString);
queryString += `&signature=${signature}`;

//console.log(APIURL + orderTestURL + '?' + queryString);

var options = {
    method: 'POST',
    uri: APIURL + orderTestURL + '?' + queryString,
    headers: {
        'X-MBX-APIKEY': APIKey
    }
    //json: true // Automatically parses the JSON string in the response
};


/*                   
request(options)
    .then(function (htmlString) {
        console.log(htmlString);
       
    })
    .catch(function (err) {
        console.log(err.message);
    });
*/



function logTime() {
    //console.log("hmm" + Date());
    
    request('https://api.binance.com/api/v3/ticker/price?symbol=TRXBTC')
    .then(function (htmlString) {
        console.log(Date() + JSON.parse(htmlString).price);
    })
    .catch(function (err) {
        console.log(err);
    });
    
}

