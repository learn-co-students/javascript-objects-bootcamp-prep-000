let [ariana, bowie, lilN, 
jCole, travis, lilD, 
drizzy, cal, day, 
chris, eagles] = ['Ariana Grande', 'David Bowie',
'Lil Nas X', 'J. Cole', 'Travis Scott', 
'Lil Dicky', 'Drake', 'Calvin Harris', 
'Dan + Shay', 'Chris Stapleton', 'Eagles'];

var playlist = {
  lilN : 'Old Town Road',
  bowie : 'Space Oddity',
  jCole :'MIDDLE CHILD',
  ariana : 'thank u, next',
  travis :'BUTTERFLY EFFECT',
  lilD : {
    'name': 'Earth',
    'featured': ['Justin Bieber', 'Ariana Grande', 'Halsey', 'Zac Brown', 'Brendon Urie', 'Hailee Steinfeld', 'Wiz Khalifa', 'Snoop Dogg', 'Kevin Hart', 'Adam Levine', 'Shawn Mendes', 'Charlie Puth', 'SIA', 'Miley Cyrus', 'Lil Jon', 'Rita Ora', 'Miguel', 'Katy Perry', 'Lil Yachty', 'Ed Sheeran', 'Meghan Trainor', 'Joel Embiid', 'Tory Lanez', 'John Legend', 'Backstreet Boys', 'Bad Bunny', 'Psy', 'Kris Wu'],
    'choir': ['Denise Janae', 'Naari Michele', 'Tiffany Palmer', 'Onitsha Shaw', 'George Potts', 'Mark Hood']
  },
  cal : {
    'name':'Slide',
    'featured': ['Frank Ocean', 'Migos']
  },
  day : 'Tequila',
  drizzy :'In My Feelings',
  chris : 'Traveller',
  eagles : 'Hotel California'
};

function updatePlaylist(myPlaylist, artistName, songTitle) {
  var newPlaylist = Object.assign(myPlaylist, { [artistName]: songTitle });
  return newPlaylist;
}

function removeFromPlaylist(myPlaylist, artistName) {
  
  delete myPlaylist[artistName];
  return myPlaylist;
  
}
