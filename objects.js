var playlist = {
  ladyGaga: 'Poker Face',
  shakira: 'Hips Dont lie',
  madona: 'Vague',
  michaelJackson: 'Billy jean'

}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi";

  return playlist;
}

function removeFromPlaylist(playlist, Kanye) {
  delete playlist.Kanye;

  return playlist;
}
