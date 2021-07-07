var playlist = {
  BTS: "Boy with Luv(feat.Halsey)",
  Lizzo: "Truth Hurts",
  'Led Zeppelin' : "Stairway to Heaven",
  'The Beatles' : "All you Need is Love"
};
//adds the `artistName: songTitle` key-value pair to `playlist`
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
};
//removes `artistName` from `playlist`
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
};
