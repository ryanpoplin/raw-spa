/* jslint settings */
/*browser: true,
continue: true,
devel: true,
indent: 2,
maxerr: 50,
newcap: true,
nomen: true,
plusplus: true,
regexp: true,
sloppy: true,
vars: true,
white: true*/
/* global jQuery */
// Module /spa/
// provides chat slider capability
// 
// Ok to be global
var spa = (function($) {
	// Module scope vars
	var 
		// set constants
		configMap = {
			extended_height : 434,
			extended_title : 'Click to retract',
			retracted_height : 16,
			retracted_title : 'Click to extend',
			template_html : '<div class="spa-slider"><\/div>'
		},
		// Declare all other module scope variables
		//
		$chatSlider,
		//
		toggleSlider,
		//
		onClickSlider,
		//
		initModule
	;
	// DOM method /toggleSlider/
	// alternates slider height
	//
	toggleSlider = function() {
		var 
			slider_height = $chatSlider.height();
		// extend slider if fully retracted
		if ( slider_height === configMap.retracted_height ) {
			$chatSlider.animate({ height : configMap.extended_height }).attr( 'title', configMap.extended_title );
			return true;
		} else if ( slider_height === configMap.extended_height ) {
			$chatSlider.animate({ height: configMap.retracted_height }).attr( 'title', configMap.retracted_title );
			return true;
		}
		// no action if animation is in trans.
		return false;
	};
	// Event handler /onClickSlider/
	// receives click event and calls toggleSlider
	//
	// Understand the events
	onClickSlider = function( event ) {
		toggleSlider();
		return false;
	};
	// Public method /initModule/
	// sets initial state and provides feature
	//
	initModule = function($container) { 
		// render HTML
		$container.html( configMap.template_html );
		// $chatSlider === top of functional scope
		$chatSlider = $container.find( '.spa-slider' );
		// initialize slider height and title
		// bind the user click event to the event handler 
		$chatSlider.attr( 'title', configMap.retracted_title ).click( onClickSlider );
			// Understand the events
		return true;
	};
	return { initModule : initModule };
}(jQuery));
// Start the spa once the DOM is ready
//
jQuery(document).ready(function() { 
		// spa module
		spa.initModule( jQuery('#spa') ); 
});