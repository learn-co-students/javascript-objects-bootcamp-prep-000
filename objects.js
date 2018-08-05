var playlist = { 
  beyonce: 'sorry', 
  kidCudi: 'save my soul',
  avettBrothers: 'murder in the city'
};

function updatePlaylist(Object, key, value) {
  return Object.assign({}, playlist, 'gordi', 'thankful')
}

function removeFromPlaylist(Object, key) {
  return delete Object.key
}