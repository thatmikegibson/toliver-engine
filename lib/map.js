function Map(width, height, tileset){
  var m = document.createElement('div');
  m.height = height;
  m.width = width;

  m.style.width = width * tileset.tile_width;
  m.style.height = height * tileset.tile_height;
  
  m.tileset = tileset;
  m.layers = new Array();
  m.id = 'map';

  m.addLayer = function(){
    var layer = new Layer(this.width, this.height, this.tileset, this.layers.length + 1);
    for(var y = 0; y < this.height; y++){
      for(var x = 0; x < this.width; x++){
        layer.tiles[y][x] = new Tile(
          x, y, 
          this.tileset.tile_width, this.tileset.tile_height, 
          ''
        );
      }
    }
    this.layers.push(layer);
  }

  m.addRandomLayer = function(){
    var layer = new Layer(this.width, this.height, this.tileset, this.layers.length + 1);
    for(var y = 0; y < this.height; y++){
      for(var x = 0; x < this.width; x++){
        layer.tiles[y][x] = new Tile(
          x, y, 
          this.tileset.tile_width, this.tileset.tile_height, 
          this.tileset.get_tile_background( Math.floor(Math.random() * this.tileset.num_tiles) )
        );
      }
    }
    this.layers.push(layer);
  };

  m.render = function(){
    var e = document.getElementById('map');
    if(e) e.parentNode.removeChild(e);

    for(var l = 0; l < this.layers.length; l++){
      var e = document.getElementById(this.layers[l].id);
      if(e) e.parentNode.removeChild(e);

      for(var y = 0; y < this.layers[l].height; y++){
        for(var x = 0; x < this.layers[l].height; x++){
          var tile = this.layers[l].tiles[y][x];
          if(tile.parentNode) tile.parentNode.removeChild(tile);
          this.layers[l].appendChild(tile);
        }
      }
      this.appendChild(this.layers[l]);
    }
    document.body.appendChild(this);
  };

  return m;
}

function Layer(width, height, tileset, layer_num){
  var l = document.createElement('div');
  l.id = 'layer-' + layer_num;
  l.width = width;
  l.height = height;

  l.style.position = 'absolute';
  l.style.top = 0;
  l.style.left = 0;
  l.style.width = width * tileset.tile_width;
  l.style.height = height * tileset.tile_height;
  l.style.zIndex = layer_num;
  
  l.tiles = Array();
  for(var y = 0; y < height; y++){
    l.tiles[y] = new Array();
  }

  return l;
}

function TileSet(src, tile_width, tile_height){
  var ts = document.createElement('img');
  ts.src = src;
  ts.tile_height = tile_height;
  ts.tile_width = tile_width;
  ts.num_tiles = (ts.width/tile_width) * (ts.height/tile_height);
  
  ts.get_tile_background = function(tile_num){
    if(tile_num < 0) return '';
    var x = (tile_num * this.tile_width) % this.width;
    var y = Math.floor((tile_num * this.tile_height)/this.width) * this.tile_height;
    return '#fff url("' + this.src + '") no-repeat scroll ' + (-x) + 'px ' + (-y) + 'px';
  };

  return ts;
}

function Tile(x, y, width, height, background){
  var t = document.createElement('span');
  t.width = width;
  t.height = height;
  t.x = x * width;
  t.y = y * height;
  
  t.className = 'tile';
  t.style.position = 'absolute';
  t.style.left = t.x;
  t.style.top = t.y;
  t.style.width = t.width;
  t.style.height = t.height;
  t.style.background = background
  
  return t;
}
