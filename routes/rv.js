var first = ['Freedom', 'Eagle', 'Liberty', 'Ultimate', 'Weekend', 'Dream', 'Travel', 'Boundless', 'Mystic', 'Discovery', 'Country', 'Pleasure', 'Blue Sky', 'Road', 'Path', 'Lazy', 'Wind', 'American', "N'Tense", 'Celebrity', "Rage'n", 'Wilderness', 'Desert', 'Safari', 'Mountain', 'Sun', 'Super', 'Comfort', 'Adventure', 'Globe', 'Alpine', 'Trail', 'Fun', 'Vision', 'Land'];

var second = ['Chariot', 'Ambassador', 'Intruder', 'Wanderer', 'Desperado', 'Explorer', 'Elite', 'Trekker', 'Rendezvous', 'Ranger', 'Dreamer', 'Seeker', 'Commander', 'Nomad', 'Express', 'Drifter', 'Baron', 'Stormer', 'Cruiser', 'Coach', 'Bullet', 'Warrior', 'Deluxe', 'Mountaineer', 'Patriot', 'Rover', 'Companion', 'Tracker', 'Zephyr', 'Squire', 'Marauder', 'Raider', 'Leprechaun', 'Angler', 'Hideout', 'Scamp', 'Prowler', 'Wildcat', 'Challenger', 'Conquest', 'Avenger', 'Rampage', 'Scout', 'Hunter', 'Bounder', "Cruis'r"];

exports.index = function(req, res) {

  var firstRand = Math.floor(Math.random() * first.length);
  var secondRand = Math.floor(Math.random() * second.length);

  var front = first[firstRand];
  var back = second[secondRand];
  var whole = front + " " + back;
  res.send({ title: whole});
};
