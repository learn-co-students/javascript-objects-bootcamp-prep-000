var playlist = { CalvinHarris: 'Feels',
  Odesza: 'Sun Models'
};

playlist.CalvinHarris

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

updatePlaylist(playlist, 'Rihanna', 'Same Ol Mistakes')

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
