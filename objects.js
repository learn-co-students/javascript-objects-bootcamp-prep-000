var playlist = new Object({artistName: "songTitle"})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}

/* EXPLANATION DIFFERENCE BETWEEN OBJ.PARAMETER AND OBJ[PARAMETER]
playlist.artistName <- This is looking for a key in the playlist object called
artistName while this
playlist[artistName] is looking for a key in the playlist object using the variable
artistName

So basically this playlist.artistName is equivalent to doing this playlist["artistName"]

blockquote by NICHOLAS STEPHENSON https://learn.co/NStephenson
*/
