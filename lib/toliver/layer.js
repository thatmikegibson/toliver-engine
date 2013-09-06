if( typeof(Toliver) === "object" ){
  Toliver.Layer = function( options ){ return {
    elem: null,

    tileSet: options.tileSet,
    tiles: options.tiles,

    getElem: function(){
      return this.elem;
    },

    getTileSet: function(){
      return this.tileSet;
    },

    getTileHeight: function(){
      return 40;
    },

    getTileWidth: function(){
      return 40;
    },

    getTiles: function(){
      return this.tiles;
    },

    setTiles: function( newTiles ){
      this.tiles = newTiles;
      return this;
    },

    getTilesPerRow: function(){
      return 8;
    },

    renderTiles: function(){
      for( var i = 0; i < this.getTiles().length; i++ ){
        for( var j = 0; j < this.getTiles()[i].length; j++ ){

          var tileY = Math.floor( this.getTiles()[i][j] / this.getTilesPerRow() - 1 ) * this.getTileHeight();
          var tileX = ( this.getTiles()[i][j] % this.getTilesPerRow() - 1 ) * this.getTileWidth();

          $( this.getElem() ).append(
            $("<div>")
              .css( "background-image", "url('" + this.getTileSet() + "')" )
              .css( "background-position", "-" + tileX + "px -" + tileY + "px" )
              .height( this.getTileHeight() + "px" )
              .width( this.getTileWidth() + "px" )
              .offset( { top: i * this.getTileHeight(), left: j * this.getTileWidth() } )
              .css( "position", "absolute" )
              .addClass( "toliver-tile" )
            );
        }
      }
    },

    render: function(){
      if( this.getElem() == null ){
        this.elem = $("<div>")
          .offset( { top: 0, left: 0 } )
          .css( "position", "relative" )
          .css( "overflow", "none" )
          .addClass( "toliver-layer" );

        this.renderTiles();
      }
    }
  } };
}
