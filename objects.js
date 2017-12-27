var playlist = {
  'kanye': 'golddigger'
};

function updatePlaylist(obj,key,value) {
  return Object.assign(obj, {[key]:value})
}

function removeFromPlaylist(playlist,artistname)  {
  delete playlist[artistname]

  return playlist;
}
