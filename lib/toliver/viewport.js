if( typeof(Toliver) === "object" ){
  Toliver.Viewport = function( height, width ){ return {
    "elem": null,
    "width":  width,
    "height": height,
    "map": null,

    "getHeight": function(){
      return this.width;
    },

    "render": function( x, y ){
      if( this.elem == null ){
        this.elem = $("<div>")
          .height( this.height )
          .width( this.width )
          .addClass("toliver-viewport")
          .css( "position", "absolute" )
          .css( "overflow", "hidden" )
          .offset({ top: y, left: x });
      }

      this.elem.append( this.map.render() );
      return this.elem;
    },

    "attachMap": function(map){
      this.map = map;
    },

    "scrollRight": function( amount ){
      this.map.elem.offset({ top: 0, left: -amount });
    },
  } };
}
