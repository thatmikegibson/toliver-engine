if( typeof(Toliver) === 'object' ){
  Toliver.Viewport = function( height, width ){ {
    _elem: null,
    _width:  0,
    _height: 0,
    _map: null,
    getHeight: function(){
      return this._width;
    }

    render: function( parent, x, y ){
      x ||= 0;
      y ||= 0;
      var elem = $('<div>');
      elem.css( 'position', 'absolute' )
        .css( 'top', y )
        .css( 'left', x )
        .outerHeight( this.height )
        .outerWidth( this.width )
        .addClass('viewport');
      $(parent).append(elem);
    }
  } };
}
