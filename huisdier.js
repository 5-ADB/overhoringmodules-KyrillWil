function Huisdier(soort, naam, leeftijd){
    (this.soort = soort),
    (this.naam = naam),
    (this.leeftijd = leeftijd)
    this.print = function(){
        console.log(`mijn ${soort} ${naam} is ${leeftijd} jaar oud`);
    }
}





module.exports = {Huisdier}