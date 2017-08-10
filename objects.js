var playlist = {
  coldplay : "we suck",
  TaylorSwift: "22",
  Kingsofleon: "rock n roll"
};

function updatePlaylist(selectedPlaylist, artist, title){
  selectedPlaylist[artist] = title
  return selectedPlaylist
}

function removeFromPlaylist(selectedPlaylist, artist){
  delete selectedPlaylist[artist]
  return selectedPlaylist
}
