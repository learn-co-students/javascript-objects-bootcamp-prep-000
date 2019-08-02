var playlist = {gem: 'lai zi tian tang de mo gui'};

function updatePlaylist(target, name, song) {
  target[name] = song;
  return target;
}

function removeFromPlaylist(source, name) {
  delete source[name];
  return source;
}
