import { Character } from './../src/game.js';
describe('Game', function () {

  //test characters name----------------------------------------------------------------------
  it('should test whether a character\'s name contains no numbers', function () {
    const testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    expect(testCharacter.checkName()).toEqual(false);
  });

  //test characters health----------------------------------------------------------------------
  it('Should test whether characters health value changes', function () {
    const testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    const healthCurrent = testCharacter.currentHealth;
    const healthChange = -30;
    expect(testCharacter.checkHealth(healthChange)).toEqual(healthCurrent + healthChange);
  });

  it('Should test whether characters health value changes to 0', function () {
    const testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    const healthChange = -110;
    expect(testCharacter.checkHealth(healthChange)).toEqual('You\'re dead son');
  });

  it('Should test whether characters health value changes to max health', function () {
    const testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    testCharacter.currentHealth = 90;
    const healthCurrent = testCharacter.currentHealth;
    const healthChange = 50;
    expect(testCharacter.checkHealth(healthChange)).toEqual(testCharacter.maxHealth);
  });

  //test characters mana----------------------------------------------------------------------
  it('Should test whether characters mana value changes', function () {
    const testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    const manaCurrent = testCharacter.currentMana;
    const manaChange = 30;
    expect(testCharacter.checkMana(manaChange)).toEqual(manaCurrent + manaChange);
  });

  it('Should test whether characters mana value changes to 0', function () {
    const testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    const manaChange = -110;
    expect(testCharacter.checkMana(manaChange)).toEqual('You\'re out of mana!');
  });

  it('Should test whether characters mana value changes to max mana', function () {
    const testCharacter = new Character('George', 'Stick', 'Thunderbolt', 'Stink Grenade');
    testCharacter.currentMana = 90;
    const manaCurrent = testCharacter.currentMana;
    const manaChange = 50;
    expect(testCharacter.checkMana(manaChange)).toEqual(testCharacter.maxMana);
  });

  //test weapon ----------------------------------------------------------------------

});
