export class Character {
  constructor(userName, userWeapon, userSpell, userItem) {
    this.name = userName;
    this.weapon = userWeapon;
    this.spell = userSpell;
    this.item = userItem;

    this.maxHealth = 100;
    this.currentHealth = 100;
    this.maxMana = 100;
    this.currentMana = 50;
  }

  checkName() {
    return /\d/.test(this.name);
  }

  checkHealth(change) {
    if (this.currentHealth + change >= this.maxHealth) {
      this.currentHealth = this.maxHealth;
    } else if (this.currentHealth + change <= 0) {
      this.currentHealth = 0;
      return "You're dead son";
    } else {
      this.currentHealth += change;
    }

    return this.currentHealth;
  }

  checkMana(change) {
    if (this.currentMana + change >= this.maxMana) {
      this.currentMana = this.maxMana;
    } else if (this.currentMana + change <= 0) {
      this.currentMana = 0;
      return "You're out of mana!";
    } else {
      this.currentMana += change;
    }

    return this.currentMana;
  }
}

export class Weapon {
  constructor(weaponName, weaponDamage) {
    this.name = weaponName;
    this.damage = weaponDamage;
  }
}
