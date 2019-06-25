
const playlist = {'Talal Maddah': 'A7ebak lo'}
function updatePlaylist(obj, key, value){
  obj[key]= value;
  return obj
}

function removeFromPlaylist(obj, key){
  delete obj[key]
  return obj;
}