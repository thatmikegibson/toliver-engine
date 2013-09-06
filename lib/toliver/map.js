if( typeof(Toliver) === "object" ){
  Toliver.Map = function( options ){ return {
    elem: null,
    viewport: null,

    width: options.width,
    height: options.height,

    _offset: { left: 0, top: 0 },

    tileSets: [],
    layers: [],

    getElem: function(){
      return this.elem;
    },

    addLayer: function( newLayer ){
      this.layers[ this.layers.length ] = newLayer;
      return this;
    },

    getLayers: function(){
      return this.layers;
    },

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

      for( var i = 0; i < this.getLayers().length; i++ ){
        this.getLayers()[i].render();
        $( this.getElem() ).append( this.getLayers()[i].getElem() );
      }

      return this.elem;
    },

    setViewport: function(viewport){
      if( this.viewport != viewport ){
        this.viewport = viewport;
        viewport.attachMap(this);
      }
    },

    getOffset: function(){
      return {
        left: this._offset.left,
        top: this._offset.top
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
