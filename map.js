function randomTypes() {
    var typesAvailable = ['grass', 'sand', 'water']
    var random = (Math.random() * 3);
    //console.log(random);
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
    this.getWalkableOutput = function(){
      if (this.isWalkable()){
        return 'O';
      }
      else{
        return 'X';
      }
    };
    this.getAsciiOutput = function() {
        if (this.type === 'grass') {
            return '*';
        }
        else if (this.type === 'sand') {
            return ':';
        }
        else {
            return '~';
        }
    }
};


function Map(width, height) {
    this.width = parseInt(width);
    
    this.height = parseInt(height);
    
    this.tiles = [];
        for (var i = 0; i <= this.height; i++) {
            var row = [];
            //console.log(i);
            for (var j = 0; j <= this.width; j++) {
                //console.log(j);
                row.push(new Tile(randomTypes()));
            }
            this.tiles.push(row);
            //console.log(row.length);
        };
        
    this.getWalkableOutput2 = function() {
        for (var i = 0; i <= this.height; i++) {
            var row = "";
            for (var j = 0; j <= this.width; j++) {
                row += this.tiles[i][j].getWalkableOutput();
            }
            console.log(row);
        }
    };
    
    this.getAsciiOutput2 = function() {
        for (var i = 0; i <= this.height; i++) {
            var row = "";
            for (var j = 0; j <= this.width; j++) {
                row += this.tiles[i][j].getAsciiOutput();
            }
            console.log(row);
        }
    };

};

var test = new Map(10, 10);
test.getAsciiOutput2();