/**
脚本作者：Cuttlefish
**/

re('is_vip":false@expire_time":"\\d{4}','is_vip":true@expire_time":"2029')
function re(){var e=$response.body;if(arguments[0].includes("@")){var n=arguments[0].split("@"),r=arguments[1].split("@");for(i=0;i<n.length;i++)var l=new RegExp(n[i],"g"),e=e.replace(l,r[i])}else{l=new RegExp(arguments[0],"g");e=e.replace(l,arguments[1])}$done(e)}
