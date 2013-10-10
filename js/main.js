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
		// Fallback
	}

}());