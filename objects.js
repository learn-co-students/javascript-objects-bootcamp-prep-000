var playlist = new Object ({
  Kanye : "Dark Fantasy",
  Kendrick: "Humble",
});

function updatePlaylist(object, artist, track){
  object[artist] = track
  return object
}

function removeFromPlaylist(object, artist){
  delete object[artist]
}