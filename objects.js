var playlist = {
  name1: "title1",
  name2: "title2",
  name3: "title3"
};


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName] : songTitle})
}


function removeFromPlaylist(obj, artistName){
  delete obj[artistName]
  return obj
}