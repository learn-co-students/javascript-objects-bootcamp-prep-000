// My objects.js

/*
Instructions
Open objects.js

Assign an object to the variable playlist and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our playlist?)

Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.
 */
 
 
 var artistName1 = "My Bloody Valentine"
 var artistName2 = "Phil Ochs"
 var artistName3 = "Slowdive"
 var playlist = {
   [artistName1]: "songTitle1",
   [artistName2]: "songTitle2",
   [artistName3]: "songTitle3",
 }
 
 
 function updatePlaylist(playlist, artistName, songTitle) {
   /*
   The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.
    */
   playlist[artistName] = songTitle
   return playlist
 }
 
 function removeFromPlaylist(playlist, artistName) {
   /*
   The body of the function should delete the key-value pair from the playlist and return the updated playlist.
    */
   delete playlist[artistName]
   return playlist
 }
 