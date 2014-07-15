Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
}

var beast = ["Chimp", "Gorilla", "Dolphin", "Parrot", "Squid", "Human", "Bub", "Robot", "Narwhal", "LawyerOwl", "DungBeetle", "Half-Orc", "Necromancer", "Yale"].randomElement();

var mod = ["Super", "Mega", "Ultra", "Macro", "Wonder", "Disastro", "Magma", "Nano", "SemiDemi"].randomElement();

var botName = mod + " " + beast;

var ethical = ["Lawful", "Neutral", "Noble", "Chaotic", "Pestilent", "Concupiscent", "Bothersome", "Lugubrious", "Autochthonous", "Hungry", "Switch-Hitting", "Mellow", "Stabby", "Executive", "Web 2.0"].randomElement();

var botVerb = ["exclaims", "alleges", "avers", "declares", "hollers", "proclaims", "cries"].randomElement();

var moral = ["Good", "Neutral", "Evil", "Hungry", "Mellow", "Stabby", "Executive"].randomElement();

var sig;
if (moral === "Neutral") {
  sig = "Whose Stance With Respect To People Is Ambiguous";

} else {
  sigHash = {"Good": "Helps"},
     {"Evil": "Harms"},
     {"Hungry": "Eats"},
     {"Mellow": "Chillaxes"},
     {"Stabby": "Stabs"},
     {"Executive": "Manages"};

    sig = sigHash[moral] || "Somethings";
  }

// var sentence = moral;
var sentence = botName + ", The " + moral + " " + ethical + " Bot Who " + sig + " people";

exports.index = function(req, res) {
    var rt = sentence;
    res.send({ chillax: rt });
};

