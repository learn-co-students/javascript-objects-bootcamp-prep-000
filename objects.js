// var meals = {};
// var meals = new Object() ;
// var meals = { breakfast: "oatmeal" };

// or, equivalently

// var meals = new Object({ breakfast: 'oatmeal' })var p;ay


var playlist = {
  Jhene: 'some Song',
};

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign({}, playlist, { [artistName]: songTitle })
};

function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
  return playlist;
};
