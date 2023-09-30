class Personnage {
    constructor (name, sanity){
        this.name = name
        this.sanity = sanity
    }
    Trajet (Playlist){
        let redLightNumbers = 0
        let nbrChangTaxi = 0

        while (redLightNumbers < 30 && this.sanity > 0){
            redLightNumbers += 1 
            console.log(this.name + " a passé un feu, cela fait " + redLightNumbers + " !")

            var ShufflePlaylist = Playlist[Math.floor(Math.random()*Playlist.length)]

            ShufflePlaylist
        
                    if (ShufflePlaylist === "Wejdene - Anissa"){
                        this.sanity -= 1
                        nbrChangTaxi += 1
                        console.log (this.name + " a entendu du Wejdene, il lui reste " + this.sanity + " de santé mentale, il décide de changer de taxi.")
                    }

                    if (this.sanity === 0){
                    console.log (this.name + " est à " + this.sanity + " de santé mentale il explose.")
                    break
                    }

                     if (redLightNumbers === 30){
                    console.log (this.name + " est rentré chez lui.")
                    break
                    }
            }
    }
 } 

let John = new Personnage ("John", 10)

let Music = ["Wejdene - Anissa", "Kenya - Strangers", "BTS - Butterfly", "Olivia - Vampire", "Coldplay - Paradise"]

console.log (John)
console.log (Music)

John.Trajet(Music)