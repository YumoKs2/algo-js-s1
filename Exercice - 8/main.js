let Damage

class Pokemon {
    constructor (name, attack, defense, hp, luck) {
        this.name = name 
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    attackPokemon (Pokemon) {
        Pokemon.hp -= this.attack - Pokemon.defense
        Damage = this.attack - Pokemon.defense
    }
}
console.log (Pokemon)

let Goupix = new Pokemon ("Goupix", 40, 20, 120, 35)

console.log (Goupix)

let Nymphali = new Pokemon  ("Nymphali", 40, 20, 120, 35)

console.log (Nymphali)

while (Nymphali.hp >= 0 || Goupix.hp >= 0) {

    Nymphali.attackPokemon (Goupix)
    console.log ("Nymphali à affligé " + Damage + " points d'attaques à Goupix.")
    console.log ("Il reste " + Goupix.hp + " de vie à Goupix.")

    if (Goupix.hp <= 0) {
        console.log ("Goupix n'a plus de vie, Nymphali remporte le combat !")
        break
    }

    Goupix.attackPokemon (Nymphali)
    console.log ("Goupix à affligé " + Damage + " points d'attaques à Nymphali.")
    console.log ("Il reste " + Nymphali.hp + " de vie à Nymphali.")

    if (Nymphali.hp <= 0) {
        console.log ("Nymphali n'a plus de vie, Goupix remporte le combat !")
    break
}
}