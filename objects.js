var playlist = {
  greenDay: "holiday",
  paramore: "decode",
  halsey: "control",
}

function updatePlaylist(obj, string, title) {
  obj[string] = title
  return obj
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}