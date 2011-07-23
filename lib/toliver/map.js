if( typeof(Toliver) === "object" ){
  Toliver.Map = function( height, width ){ return {
    "elem": null,
    "width": width,
    "height": height,
    "tileSets": [],
    "layers": [],
    "render": function(){
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
    "addTileSet": function(tileSet){},
    "addLayer": function(layer){}
  } };
}
