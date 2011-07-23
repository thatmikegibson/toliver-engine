function Sprite(world, movement_style){
  var s =  document.createElement('span');
  s.style.position = 'absolute';
  s.style.left = 0;
  s.style.top  = 0;

  s.movement_style = movement_style;
  s.height = 0;

  s.x = function(x){
    if(typeof(x) !== 'undefined'){ this.style.left = x + 'px'; }
    return parseInt(this.style.left.match('[0-9]+')[0], 1);
  };
  s.y = function(y){
    if(typeof(y) !== 'undefined'){ this.style.top = y + 'px'; }
    return parseInt(this.style.top.match('[0-9]+')[0], 1);
  };
  return s;
}

function MovementStyle(){
  return {
    moveTo: function(sprite, x, y, speed){},
    moveRight: function(sprite, distance, speed){this.moveTo(sprite, sprite.x() + distance, sprite.y(), speed);},
    moveLeft: function(sprite, distance, speed){this.moveTo(sprite, sprite.x() - distance, sprite.y(), speed);},
    moveUp: function(sprite, distance, speed){this.moveTo(sprite, sprite.x(), sprite.y() - distance, speed);},
    moveDown: function(sprite, distance, speed){this.moveTo(sprite, sprite.x(), sprite.y() + distance, speed);}
  };
}

function MovementStyleSimple(){
  var m = new MovementStyle();
  m.moveTo = function(sprite, x, y, speed){
    if(!speed){ speed = 1; }
    var dx = (sprite.x() - x) / speed;
    var dy = (sprite.y() - y) / speed;
    setInterval(
      function(){ sprite.x( sprite.x() + dx ); sprite.y( sprite.y() + dy ); },
      1000 / speed
    );
  };
  return m;
}
