var playlist = {
  'artistName': 'songTitle'
}

var updatePlaylist = function(playlist,artistName,songTitle){
  var newPlaylist = Object.assign({},playlist,{[artistName]:songTitle});
  return newPlaylist;
}

var removeFromPlaylist = function(playlist,artistName){
  return delete playlist.artistName;
}
