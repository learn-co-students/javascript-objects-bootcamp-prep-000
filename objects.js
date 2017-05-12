var playlist = {avraham: "chazak"}

function updatePlaylist(play, artist_name, song_title)
{
  play[artist_name] = song_title;
  return play;
}

function removeFromPlaylist(play, artist_name)
{
  delete play[artist_name];
  return play;
}
