//Assign an object to the variable playlist and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our playlist?)

//Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

//Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.


var playlist ={ artistName: "song title"};

function updatePlaylist(obj, key ,value){
  obj[key] = value;
    
    return obj;
  
}

    //playlist['Slowdive'] = 'Alison'
    //playlist['My Bloody Valentine'] = 'Sometimes'

updatePlaylist( playlist,"Slowdive", "Alison");
updatePlaylist(playlist, "My Bloody Valentine", "Sometimes");
updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");

//describe('removeFromPlaylist(playlist, artistName)', () => {
    //it('removes `artistName` from `playlist`', () => {
      //removeFromPlaylist(playlist, 'Slowdive')
//var Employee = {
  //firstname: "Mohammed",
  //lastname: "Haddad"
//}

//console.log(Employee.firstname);
// expected output: "Mohammed"

//delete Employee.firstname;

//console.log(Employee.firstname);
// expected output: undefined

function removeFromPlaylist(playlist, artistName){
  
  delete playlist[artistName];

    return playlist;
}
  
removeFromPlaylist(playlist,"slowdive"); 
 
    
    
    




