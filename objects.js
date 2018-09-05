var playlist = {"LedZeppelin": "Kashmir"};

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName)
{
  console.log(playlist);
  
  delete playlist[artistName];
  
  console.log(playlist);
}

removeFromPlaylist(playlist, "LedZeppelin");

/*var obj = {"name": "chris", "age": 25};

console.log(obj);

delete obj.name;

console.log(obj); */