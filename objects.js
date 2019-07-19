var playlist = {
      Slowdive:'Alison',
      MyBloodyValentine:'Sometimes'
}

function updatePlaylist(obj,key,value)
{
 obj[key]=value
  return obj
}

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
  return playlist
}