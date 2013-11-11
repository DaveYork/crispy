/*
 * Avoid `console` errors in browsers that lack a console.
 */

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
 * Plugins
 */

// Flowtype - Responsive web typography at its finest: font-size and line-height based on element width.
// FlowType.JS is licensed under the MIT License.
// https://github.com/simplefocus/FlowType.JS

(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35,
         lineRatio : 1.45
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;

         $el.css({
            'font-size'   : fontSize + 'px',
            'line-height' : fontSize * settings.lineRatio + 'px'
         });
      };

// Make the magic visible
// ======================
      return this.each(function() {
         
      // Context for resize callback
         var that = this;
         
      // Set changes on load
         changes(this);
         
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      });
   };
}(jQuery));

/* Tappy! - a lightweight normalized tap event. 
 * Copyright 2013 @scottjehl, Filament Group, Inc. Licensed MIT 
 * https://github.com/filamentgroup/tappy/ 
 */

(function( w, $, undefined ){

  var tap = function( $els ){
    return $els.each(function(){

      var $el = $( this ),
        lastE,
        resetTimer,
        lastScroll,
        scrollTolerance = 15,
        href;

      function trigger( e ){
        e.preventDefault();
        $( e.target ).trigger( "tap", [ e ] );
      }

      function start(){
        lastScroll = w.document.body.scrollTop;
        if( $el.is( "a" ) ){
          // set href to null hash during tap. this prevents the address bar from dropping down in iOS
          href = $el[ 0 ].href;
          $el[ 0 ].href = "#";
        }
      }

      function end( e ){

        e.preventDefault();

        // this part prevents a double callback from touch and mouse on the same tap
        if( lastE && lastE !== e.type ){
          return false;
        }

        lastE = e.type;
        clearTimeout( resetTimer );
        resetTimer = setTimeout( function(){
          lastE = null;
        }, 1000 );

        // if a scroll happened between touchstart and touchend
        if( e.type === "touchend" && Math.abs( w.document.body.scrollTop - lastScroll ) > scrollTolerance ){
          return false;
        }

        // set href back
        if( href ){
          $el[ 0 ].href = href;
        }
        href = null;

        trigger( e );
      }

      $el
        .bind( "touchstart", start )
        .bind( "touchend", end )
        .bind( "click", end );
    });
  };

  // monkeybind
  var oldBind = $.fn.bind;
  $.fn.bind = function( evt, callback ){
    if( /(^| )tap( |$)/.test( evt ) ){
      tap( this );
    }
    return oldBind.apply( this, [evt, callback] );
  };

}( this, jQuery ));