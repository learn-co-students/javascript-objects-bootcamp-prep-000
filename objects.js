var playlist = {
  Kanye: "Gold Digger"
};

function updatePlaylist(obj,key,value) {
  return Object.assign(obj, {[key]:value});
}

function removeFromPlaylist(playlist,artistname)  {
  delete playlist[artistname];

  return playlist;
}