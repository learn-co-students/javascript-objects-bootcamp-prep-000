var playlist = {
  Yes: "Roundabout"
};

function updatePlaylist(obj, newArtist, newSong)
{
  obj[newArtist] = newSong;
  return obj;
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
  return playlist;
}