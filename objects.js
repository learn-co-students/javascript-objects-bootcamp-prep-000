var playlist = {
  Prince: 'Kiss',
  Madonna: 'Borderline',
  Queen: 'Bicycle Race'
};

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

updatePlaylist(playlist, 'Bruce Springsteen', 'Born to Run');

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj
}

removeFromPlaylist(playlist, 'Queen');
