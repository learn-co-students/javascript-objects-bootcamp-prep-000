var playlist = {
  vanHalen: 'Panama'
}
// ``` javascript
// function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
//   obj[key] = value

//   return obj
// }```

function updatePlaylist (obj,key,value) {
  obj[key] = value;
  return obj;
}
function removeFromPlaylist (obj, key) {
  delete obj[key];
};