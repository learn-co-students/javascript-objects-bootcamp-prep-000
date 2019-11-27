var playlist = 
{ 
  LinkinPark: "Leave out all the rest",
  ScarsOnBroadway: "Serious",
  TeganAndSara: "Closer"
};

function updatePlaylist(obj, art, song)
{
  return Object.assign(obj, { [art]: song})
}

function removeFromPlaylist(obj, art)
{
  return delete obj[art];
}