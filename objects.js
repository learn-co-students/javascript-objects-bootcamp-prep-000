var playlist = {
  "Slowdive" : 'Alison',
  "My Bloody Valentine" : 'Sometimes'
};

// took a while until I changed "name" to "artistName" and "song" to "songTitle", then it worked...
function updatePlaylist(obj , artistName , songTitle)
{
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(obj , artistName)
{
  delete obj[artistName];
  return obj;
}