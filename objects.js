var playlist = { Kanye: "gold-digger"}

function updatePlaylist(obj, key, value) {
  return Object.assign ({}, obj, {[key]: value})
}

function removeFromPlaylist(obj, key) {
  delete playlist.Kanye;
  return playlist
}
