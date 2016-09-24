var playlist = { abba: 'hot garbage'};

function updatePlaylist(list, name, title) {
  return Object.assign({}, list, { [name]: title});
}

function removeFromPlaylist(list, name) {
  delete list[name];
  return list;
}
