export function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
   	hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return intToRGB(hash);
}

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
  	return false;
  }
  return true;
}
