var playlist = {
  kanye: 'Gold Digger'
}

var updatePlaylist = function(obj, key, value){
return Object.assign({}, obj, { [key]: value })
}

var removeFromPlaylist = function(obj, key){
 delete obj[key];
 return obj
}
