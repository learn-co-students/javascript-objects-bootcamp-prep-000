var playlist = {
  Big_Country: "In a big country"
};
//key has to be Big_Country or BigCountry or 'Big Country' to avoid space

function updatePlaylist(playlist, name, song) {
  playlist[name] = song;
  return playlist;
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}
