'use strict'

describe('addToPlaylist', function(){
  var myPlaylist;

  beforeEach(function() {
    myPlaylist = {};
  });

  it("returns an object with one song and artist key-value pair", function(){
    var tswiftPlaylist = {"taylor swift": "out of the woods"};
    expect(addToPlaylist(myPlaylist, "out of the woods", "taylor swift")).toEqual(tswiftPlaylist);
  });
});

describe('removeFromPlaylist', function(){
  var myPlaylist;
  var beyoncePlaylist;

  beforeEach(function() {
    myPlaylist = {};
    beyoncePlaylist = {};
  });

  it("returns an object with one song and artist key-value pair", function(){
    var bPlaylist = addToPlaylist(beyoncePlaylist, "halo", "beyonce");
    addToPlaylist(myPlaylist, "out of the woods", "taylor swift");
    addToPlaylist(myPlaylist, "halo", "beyonce");
    expect(removeFromPlaylist(myPlaylist, "taylor swift")).toEqual(bPlaylist);
    expect(Object.keys(myPlaylist).length).toEqual(1);
  });

});

describe('changePlaylistSong', function(){
  var myPlaylist;

  beforeEach(function() {
    myPlaylist = {};
  });

  it("returns an object with an updated key-value pair", function(){
    var newPlaylist = {"taylor swift": "style"};
    addToPlaylist(myPlaylist, "out of the woods", "taylor swift");
    expect(changePlaylistSong(myPlaylist, "style", "taylor swift")).toEqual(newPlaylist);
    expect(Object.keys(myPlaylist).length).toEqual(1);

  });

});

describe('readPlaylist', function(){
  var myPlaylist;

  beforeEach(function() {
    myPlaylist = {};
  });

  it("returns an object with an updated key-value pair", function(){
    spyOn(console, 'log');
    addToPlaylist(myPlaylist, "out of the woods", "taylor swift");
    addToPlaylist(myPlaylist, "hotline bling", "drake");
    readPlaylist(myPlaylist);

    expect(console.log.calls.argsFor(0)).toEqual(["The song out of the woods by taylor swift is in your playlist"])
    expect(console.log.calls.argsFor(1)).toEqual(["The song hotline bling by drake is in your playlist"])
  });

});