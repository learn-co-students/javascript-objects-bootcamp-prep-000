var playlist = {
  Jon_Bellion: "All Time Low"
}

function updatePlaylist(aPlaylist, artist, title){
  aPlaylist[artist] = title
}

function removeFromPlaylist(aPlaylist, artist){
  delete aPlaylist[artist]
}
