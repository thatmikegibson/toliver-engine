if( typeof(Toliver) === "object" ){

  Toliver.AXIS_X = "x";
  Toliver.AXIS_Y = "y";
  
  Toliver.Viewport = function( height, width ){ return {
    elem: null,

    width:  width,
    height: height,
    
    _offset: { top: 0, left: 0 },
    
    map: null,

    getHeight: function(){
      return this.width;
    },

    offset: function(){
      return {
        left: this._offset.left,
        top: this._offset.top
      };
    },

    render: function( left, top ){
      if( this.elem == null ){
        this._offset.left = left;
        this._offset.top  = top;

        this.elem = $("<div>")
          .height( this.height )
          .width( this.width )
          .addClass("toliver-viewport")
          .css( "position", "absolute" )
          .css( "overflow", "hidden" );

        this.elem.css( 'left', this._offset.left );
        this.elem.css( 'top', this._offset.top );
      }

      this.elem.append( this.map.render() );

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

    scrollRight: function( amount ){
      this.scroll( Toliver.AXIS_X, amount );
    },
    
    scrollLeft: function( amount ){
      this.scroll( Toliver.AXIS_X, -amount );
    },
    
    scrollUp: function( amount ){
      this.scroll( Toliver.AXIS_Y, -amount );
    },

    scrollDown: function( amount ){
      this.scroll( Toliver.AXIS_Y, amount );
    }
  } };
}
