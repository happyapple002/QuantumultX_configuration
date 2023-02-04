var chxm1023 = JSON.parse($response.body);

chxm1023.data["vipState"] = {
    "state" : 1,
    "forever" : true,
    "startTime" : 1566600000000,
    "expireTime" : 4092599349000
};

$done({body : JSON.stringify(chxm1023)});
