playlist = {
  Madonna: "Like a Virgin",
  Kanye: "Gold Digger"

}

function updatePlaylist (playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song})
}

function removeFromPlaylist(obj, key) {

  delete obj[key];
  return obj;
}


removeFromPlaylist(playlist, 'Kanye');

console.log(playlist);
