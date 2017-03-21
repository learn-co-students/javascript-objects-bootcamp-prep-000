var playlist = {Shakira: "waka waka"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
/*function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}*/

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
