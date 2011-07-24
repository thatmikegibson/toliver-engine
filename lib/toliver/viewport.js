if( typeof(Toliver) === "object" ){
  Toliver.Viewport = function( height, width ){ return {
    elem: null,

    width:  width,
    height: height,
    
    position: { x: 0, y: 0 },
    
    map: null,

    getHeight: function(){
      return this.width;
    },

    getPosition: function(){
      var parentOffset = this.elem.parent().offset();
      return {
        left: this.position.x + parentOffset.left,
        top: 
      };
    },

    render: function( parent, x, y ){
      if( this.elem == null ){
        this.position.x = x;
        this.position.y = y;

        this.elem = $("<div>")
          .height( this.height )
          .width( this.width )
          .addClass("toliver-viewport")
          .css( "position", "absolute" )
          .css( "overflow", "hidden" );
      }

      this.map.render( this.elem );
      return this.elem;
    },

    attachMap: function(map){
      if( this.map != map ){
        this.map = map;
        map.setViewport(this);
      }
    },

    scroll: function( axis, amount ){
      this.map.scroll( axis, amount );
    },
  } };
}
