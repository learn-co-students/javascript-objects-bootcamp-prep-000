var playlist = {
  daniel_avery: "Deone Logic",
  moodymean: "Lyk U Use 2",
  lone: "Airglow Fires"
}

function updatePlaylist(object, artistName, songTitle) {
  object[artistName] = songTitle
  return object
}

function removeFromPlaylist(object, artistName) {
  delete object[artistName]
  return object
}
