var playlist = {
  Autechre: 'Eutow',
  Battles: 'Atlas',
  Burial: 'Archangel',
  Squarepusher: 'Unreal Square',
  Underworld: 'Cowgirl',
  Kanye: 'Gold Digger'
};

function updatePlaylist (obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
}
