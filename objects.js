var playlist = {
  artistname: ['songtitles']
}

function updatePlaylist(playlist, artistName, songTitle)
{
  //add Phil Ochs
  playlist['Slowdive'] = 'Alison';
  playlist['My Bloody Valentine'] = 'Sometimes';
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi';
}

function removeFromPlaylist(playlist, artistName)
{
  playlist['Slowdive'] = 'Alison';
  playlist['My Bloody Valentine'] = 'Sometimes';
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi';
  
  delete playlist['Slowdive'];
  //remove Slowdive
}