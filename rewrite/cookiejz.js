var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "request_date_ms" : 1675774447396,
  "request_date" : "2023-02-07T12:54:07Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-02-07T12:54:07Z",
    "original_application_version" : null,
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "app.ft.Bookkeeping.lifetime" : {
        "warning" : "仅供学习，禁止转载或售卖",
        "wechat" : "chxm1023",
        "purchase_date" : "2022-09-09T09:09:09Z",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "feedback" : "chxm1023",
        "ownership_type" : "PURCHASED"
      }
    },
    "entitlements" : {
      "allaccess" : {
        "wechat" : "chxm1023",
        "ownership_type" : "PURCHASED",
        "product_identifier" : "app.ft.Bookkeeping.lifetime",
        "feedback" : "chxm1023",
        "warning" : "仅供学习，禁止转载或售卖",
        "original_purchase_date" : "2022-09-09T09:09:09Z",
        "purchase_date" : "2022-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "$RCAnonymousID:b03c185839254e50bcc69581fd853634",
    "last_seen" : "2023-02-07T12:54:07Z"
  }
};

$done({body : JSON.stringify(chxm1023)});
