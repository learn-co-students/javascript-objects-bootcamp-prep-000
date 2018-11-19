/* keys = artist, song = value. Limitation = everything is a string.
* for non-simple strings use brackets!
*/
var playlist = {['Amy Winehouse']: "Rehab", 
['No Doubt']: "Don't Speak"};

function updatePlaylist (object, key, value) {
object[key] = value;
return object;
}

function removeFromPlaylist (object, key) {
delete object[key];
return object;
}

