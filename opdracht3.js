// zorg ervoor dat onderstaande code werkt (ZONDER DEZE CODE AAN TE PASSEN)
// uiteraard moet je hier een extra bestand aanmaken

const dier = require("./huisdier");

const woef = new dier.Huisdier("hond", "woef", 3);


console.log(woef.print())
// resutlaat
// > mijn hond woef is 3 jaar oud
