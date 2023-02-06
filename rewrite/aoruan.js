var body = $response.body;
var chxm1023 = JSON.parse(body);
chxm1023.data.is_activated = 1;
chxm1023.data.remain_days = 999999999;
chxm1023.data.expire_time = "2099-09-09 09:09:09";
chxm1023.data.expired_at = 4092600296;
chxm1023.data.license_type = "premium";
chxm1023.data.durations = 999999999;
chxm1023.data.vip_special = 1;


body = JSON.stringify(chxm1023);

$done({body});
