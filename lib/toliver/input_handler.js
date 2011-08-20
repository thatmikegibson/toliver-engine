if( typeof(Toliver) === "object" ){
  // set up input constants
  var constants = {
    KEY_UP:     38,
    KEY_DOWN:   40,
    KEY_LEFT:   37,
    KEY_RIGHT:  39,
  };

  for( var c in constants ){
    Toliver[c] = constants[c];
  }

  // define class
  Toliver.InputHandler = function(){ return {
    keys: {},

    render: function(){
      // init all key codes
      for( var i = 0; i < 255; i++ ){ 
        this.keys[i] = false 
      }

      var ih = this;
      $(document).keydown( function(e){ ih.processKeyDown(e); } );
      $(document).keyup( function(e){ ih.processKeyUp(e); } );
    },

    processKeyDown: function(e){
      this.keys[e.which] = true;
    },

    processKeyUp: function(e){
      this.keys[e.which] = false;
    },
  } };
}
