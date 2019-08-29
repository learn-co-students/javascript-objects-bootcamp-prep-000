var playlist = {
  ledZeppelin: "Stairway to Heaven",
  whiteStripes: "Saven Nation Army"
};

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}