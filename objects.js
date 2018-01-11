var playlist = new Object({
  blur: "song 2"
});

function updatePlaylist(list, artist, song) {
  return Object.assign(list, {[artist]: song});
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}

updatePlaylist(playlist, "RyX", "Berlin")

function printPlaylist(list) {
  for(let artist in list){
    console.log(artist + " - " + list[artist]);
  }
}

printPlaylist(playlist);

removeFromPlaylist(playlist, "RyX");

printPlaylist(playlist);