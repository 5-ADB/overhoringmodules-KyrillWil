// schrijf op 2 verschillende manieren een constructor voor onderstaande object

const factuur = {
    id: 1,
    klant: "Jos Joskens",
    producten: [
        appel, peer, banaan
    ],
    betaald: false
}


function Factuur1(id, klant, producten, betaald){
    (this.id = id),
    (this.klant = klant),
    (this.producten = producten),
    (this.betaald = betaald)
    this.info = function(){
        console.log(id, klant, producten, betaald);
    }
}

function Factuur2(id, klant, producten, betaald){
    (this.id = id),
    (this.klant = klant),
    (this.producten = producten),
    (this.betaald = betaald)
}

const persoon1 = new Factuur1(1, "Jos Joskens", [appel, peer, banaan], false)
const persoon2 = new Factuur2(1, "Jos Joskens", [appel, peer, banaan], false)

console.log(persoon1.info());
console.log(persoon2);

