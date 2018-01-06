var playlist = {};

function addSong(playlist, artist, songTitle) {
  if(playlist[artist] !== undefined) {
    if(Array.isArray(playlist[artist]) === true) {
      playlist[artist].push(songTitle);
      playlist[artist].sort();
    } else {
      playlist[artist] = [playlist[artist]];
      playlist[artist].push(songTitle);
      playlist[artist].sort();
    }
  } else {
    playlist[artist] = songTitle;
  }
  return playlist[artist];
}