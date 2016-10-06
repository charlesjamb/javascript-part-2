function randomTypes() {
    var typesAvailable = ['grass', 'sand', 'water']
    var random = (Math.random() * 2);
    var out = typesAvailable[Math.trunc(random)];
    return out;
}

function Tile(type) {
    this.type = type;
    this.isWalkable = function() {
        if (this.type === 'grass' || this.type === 'sand') {
            return true;
        }
        else {return false;}
    };
};

function Map(width, height) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    //console.log('called!');
    //this.tiles
    this.tiles = [];
    for (var i = 0; i <= this.height; i++) {
        var row = [];
        //console.log(i);
        for (var j = 0; j <= this.width; j++) {
            //console.log(j);
            row.push(new Tile('grass'));
        }
        this.tiles.push(row);
        //console.log(row.length);
    }
};

var test = new Map(10, 10);
console.log(test);