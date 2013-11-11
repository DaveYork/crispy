(function() {

	/*
	 * Old IE detection (IE8 and below)
	 */

	var oldIE; // Declare for IE9+ and modern browsers
	if (oldIE = true) {
	  //console.log("old IE");
	}
	else {
	  //console.log("not old IE");
	}

	/*
	 * Modernizr feature detection
	 */

	if (!Modernizr.svg) {
		// fallback
	}

	/* 
	 * Flowtype
	 * https://github.com/simplefocus/FlowType.JS
	 */

	$(".box").flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 12,
		maxFont   : 40,
		fontRatio : 30,
		lineRatio : 1.45
	});

	/* 
	 * Tappy!
	 * https://github.com/simplefocus/FlowType.JS
	 */

	$("a.my-link").bind("tap", function(e){ 
		// go to the e.target.href URL
	}); 


}());