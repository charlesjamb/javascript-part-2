//Warriors first part

//Warriors function constructor
function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = 'wooden sword';
    this.power = Math.random()*(100-1)+1;
};
    
Warrior.prototype.fight = function(opponent) {
    return this.name + ' rushes to the arena with ' + opponent.name;
};

Warrior.prototype.faceoff = function(opponent) {
    if (this.power > opponent.power) {
        return this.name + ' wins!';
    }
    else {
        return opponent.name + ' wins!';
    }
};


var chuck = new Warrior('Chuck', 'M');
var eve = new Warrior('Eve', 'F');
var reese = new Warrior('Reese', 'M');
var aly = new Warrior('Aly', 'F');
var ian = new Warrior('Ian', 'M');

var enterTheArena = chuck.fight(eve);
var theBattle = chuck.faceoff(eve);
//console.log(enterTheArena);
//console.log(theBattle);
