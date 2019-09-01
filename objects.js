var playlist = { Beatles: "Yellow Submarine"};

function updatePlaylist(object, name, title) {
  object[name] = title;
  return object
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist
}
