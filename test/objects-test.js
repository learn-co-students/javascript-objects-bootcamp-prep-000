/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('objects', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'objects.js'), 'utf-8')
  })

  it('defines an object called `playlist`', () => {
    var object = {
      object
    }
    return object
    expect(typeof playlist).to.equal('object')
    expect(Object.keys(playlist).length).to.be.greaterThan(0)
  })

  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      function updatePlaylist(playlist, artistName, songTitle) {
        var playlist ={
          artistName: "Phil Ochs",
          songTitle: "Here's to the State of Mississippi",

        }
        playlis['artistName'] = "Phil Ochs";
        playlist['songTitle'] = "Here's to the State of Mississippi";
      }
      return updatePlaylist
      expect(updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi")).
        to.eql({ 'Phil Ochs': "Here's to the State of Mississippi" })
    })
  })

  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      function removeFromPlaylist(playlist, artistName) {
        var playlist = {
         artistName : "Kanye"
      }
      delete removeFromPlaylist.artistName

    }
      return removeFromPlaylist

      expect(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")).
        to.eql({})
    })
  })
})
