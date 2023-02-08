console.log('剪映')

var body = $response.body;
var obj = JSON.parse(body);
console.log(JSON.stringify(obj.data))

$done()

/**
var body = JSON.parse($response);
console.log('response---------',body)
var header = JSON.parse($header);
if ($request.url.indexOf('user_wallet_info') != -1){
  body = {
    "sign" : "MJEUGpMz8xv2zeY4O5Jk7MrjVVYFfqlby8Fa+N9jVoT5gJXWqHqlP974pdmfENakn7S0+X25Wzjj4GYsXt/Z3jZdhjAxaZtZBID8wvQ29czvrjREHfLIEbLJmz2N57WY8dZQ4HsVxZtTNEBYP7R3LMU/u7nMDbdL4z9KOiWKlhU=",
    "data" : {
      "total_money" : 0,
      "latest_record_time" : 0,
      "user_id" : 2392174938823367,
      "current_money" : 0,
      "currency_code" : "CNY",
      "can_buy_template_free" : true
    },
  "response" : {
    "user_id":2392174938823367,
    "total_money":0,
    "current_money":0,
    "currency_code":"CNY",
    "latest_record_time":0,
    "can_buy_template_free":true
  },
  "systime" : "1675816450429",
  "errmsg" : "success",
  "ret" : "0"
  }
}
$done({body : JSON.stringify(body)});

**/
