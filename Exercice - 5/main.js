let a = "Jean"
let b = "Paul"

function checkName (firstName, secondName){
    if (firstName === secondName){
        return true 
    }
    else {
        return false
    }
}

let result = checkName (a, b)
console.log (result)


let c = 1
let d = 2
let résultat = calcul (c,d)

function calcul (numéro1, numéro2){
    return (numéro1 - numéro2)
}

console.log (résultat)

let Kajal  = 2002
let Samy = 2000
let résultatAge = calcul (c,d)

function calculAge (today, bornYear){
    return (today - bornYear)
}

console.log (résultat)