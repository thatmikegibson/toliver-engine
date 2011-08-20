if( typeof(Toliver) === "object" ){
  Toliver.Map = function( height, width ){ return {
    elem: null,
    viewport: null,

    width: width,
    height: height,

    _offset: { left: 0, top: 0 },

    tileSets: [],
    layers: [],

    render: function(){
      if( this.elem == null ){
        this.elem = $("<div>")
          .height( this.height )
          .width( this.width )
          .offset({ top: 0, left: 0 })
          .css( "position", "absolute" )
          .css( "overflow", "none" )
          .addClass("toliver-map");
      }

      return this.elem;
    },
    
    setViewport: function(viewport){
      if( this.viewport != viewport ){
        this.viewport = viewport;
        viewport.attachMap(this);
      }
    },

    addTileSet: function(tileSet){},
    addLayer: function(layer){},

    offset: function(){
      return {
        left: this._offset.left,
        top: this._offset.left
      };
    },

    scroll: function( axis, amount ){
      switch( axis ){
        case Toliver.AXIS_X:
          this._offset.left += -amount;
          break;
        case Toliver.AXIS_Y:
          this._offset.top += -amount;
          break;
      }

      this.elem.css( 'left', this._offset.left );
      this.elem.css( 'top', this._offset.top );
    },

  } };
}
