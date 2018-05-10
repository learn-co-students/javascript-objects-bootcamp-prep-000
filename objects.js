var playlist = {OutKast: 'Babylon' ,
  Nas: 'Ether', Jadakiss: 'Why?'
};
function updatePlaylist (playlist, name, string) {
   playlist[name] = string;
   return playlist;
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}