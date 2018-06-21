var playlist = new Object({artist: "JT", song: "Hello"})

function updatePlaylist(playlist, artist, song){
  
  return Object.assign({}, playlist, {[JT]: song})
} 

const obj = {JT: Hello}

updatePlaylist(playlist, 'TJ', 'Goodbye')



  /*
  playlist[artist] = "newArtist";
  playlist[song] = "newSong"; 
  return playlist; 
}

*/ 


/* 

Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.

*/ 