var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes',
  'Phil Ochs': "Here's to the State of Mississippi"
};

// You can end up having multiple songs by the same artist, multiple of the same song names, etc.

function updatePlaylist({}, obj, string) {
  return Object.assign({}, obj, string)
}

function removeFromPlaylist({}, string) {
  delete playlist['Slowdive']
  return Object.assign({}, string)
}
