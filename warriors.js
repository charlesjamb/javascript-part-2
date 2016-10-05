//Warriors first part

//Warriors function constructor
function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = 'wooden sword';
    this.power = Math.random()*(100-1)+1;
    this.fight = function() {
        console.log('rushes to the arena with');
    };
    this.faceoff = function(opponent) {
        if (this.power > opponent.power) {
            console.log(this.name + ' wins!');
        }
        else {
            console.log(opponent.name + ' wins!');
        }
    }
}
