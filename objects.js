var playlist = {
  Beatles: "Yesterday",
  "John Lennon": "Love"
}

function updatePlaylist (obj, artistname, title) {
  obj[artistname]= title
  return obj
}

function removeFromPlaylist (obj, artistname) {
  delete obj[artistname]
  return obj
}
