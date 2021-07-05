var meals = {breakfast: 'oatmeal', lunch: 'burrito', dinner: 'steak'};
var playlist = {Kanye: 'Runaway'};

function updatePlaylist(play, artist, song){
  play[artist] = song
  return play
}

function removeFromPlaylist(play, artist){
  delete play[artist]
  return play
}
