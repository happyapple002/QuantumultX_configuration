var body = $response.body;
var obj = JSON.parse(body);
if ($request.url.indexOf('user_wallet_info') != -1){
  obj.data = {
    "total_money" : 0,
    "latest_record_time" : 0,
    "user_id" : 2392174938823367,
    "current_money" : 0,
    "currency_code" : "CNY",
    "can_buy_template_free" : true
  }
  obj.response = {
    "user_id":2392174938823367,
    "total_money":0,
    "current_money":0,
    "currency_code":"CNY",
    "latest_record_time":0,
    "can_buy_template_free":true
  }
}
$done(JSON.stringify(obj));
