body = $response.body.replace(/\"TFlag":\d+/g, '\"TFlag":1').replace(/\"UFlag":\d+/g, '\"UFlag":1').replace(/\"UserVipEnd":"(.*?)"/g, '\"UserVipEnd":"2099-09-09 09:09:09"')

$done({body});
