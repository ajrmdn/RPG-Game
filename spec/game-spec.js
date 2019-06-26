import { Character } from './../src/game.js';
describe('Game', function () {

  it('should test whether a character\'s name contains no numbers', function () {
    var testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    console.log(testCharacter.name);
    expect(testCharacter.checkName()).toEqual(false);
  });

});
