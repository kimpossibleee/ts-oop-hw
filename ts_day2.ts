interface Attacker {
    attack(): void;
  }

interface Defender {
defend(): void;
}

abstract class Character implements Attacker, Defender {
protected gold: number;

constructor() {
    this.gold = 0;
}

collectGold(amount: number): void {
    this.gold += amount;
    console.log(`Collected ${amount} gold. Total gold: ${this.gold}`);
}

abstract attack(): void;

abstract defend(): void;
}

class Ogre extends Character {
attack(): void {
    console.log("Ogre has attacked!");
}

defend(): void {
    console.log("Ogre defended the attack!");
}
}

class Peon extends Character {
attack(): void {
    console.log("Peon has attacked!");
}

defend(): void {
    console.log("Peon has defended the attack!");
}
}

class Knight extends Character {
private weapon: string;
private armor: string;

constructor() {
    super();
    this.weapon = "Sword";
    this.armor = "Armor";
}

attack(): void {
    console.log(`Knight attacked with a ${this.weapon}`);
}

defend(): void {
    console.log(`Knight defended with ${this.armor}`);
}

changeWeapon(newWeapon: string): void {
    this.weapon = newWeapon;
    console.log(`Knight now wields a ${this.weapon}`);
}
}

class Archer extends Character {
private tunic: string;

constructor() {
    super();
    this.tunic = "Tunic";
}

attack(): void {
    console.log("Archer attacked with a Bow and Arrow");
}

defend(): void {
    console.log(`Archer defends with ${this.tunic}`);
}
}

const ogre = new Ogre();
ogre.attack();
ogre.defend();
ogre.collectGold(10);

const knight = new Knight();
knight.attack();
knight.defend();
knight.collectGold(5);
knight.changeWeapon("Club");
knight.attack();

const archer = new Archer();
archer.attack();
archer.defend();
archer.collectGold(3);
