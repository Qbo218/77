let path1 = '/vip/v2/user/vip';
let path2 = '/music.pay';

if (url.indexOf(path1) != -1) {
 var obj = JSON.parse(body);
 obj.data = JSON.parse('{"time":"1514736000000","vipExpire":1640966400000,"biedSong":"0","isYearUser":2,"vipmExpire":1640966400000,"biedAlbum":"0","vipOverSeasExpire":1640966400000,"vip3Expire":1640966400000,"vipLuxuryExpire":1640966400000,"isNewUser":2}');
 result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
 function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
 }
 var keywords = ['vip'];
 var result = body;
 keywords.forEach(function(k) {
  result = replaceAll(result, k, 'song');
 });
}
result;
