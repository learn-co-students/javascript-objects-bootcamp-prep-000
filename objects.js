var playlist = {
  // soundGarden: "Spoonman",
  // johnMayer: "Perfectly lonely",
  // runTheJewels : "Nobody Speaks",
  nf : "Grindin'"
}
console.log(playlist)
var updatePlaylist = function(music, artist, song) {
  music[artist] = song
  return music
}

var removeFromPlaylist = function(music, artist) {
  delete music[artist]
  return music
}
