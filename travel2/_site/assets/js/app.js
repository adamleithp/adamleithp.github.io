$(document).foundation(); // run foundation
// Options
var FixedFooterOn = true; // Fixed footer on/off true

// Functions
//Overlay FadeOut
(function() {
	var loading_overlay = $(".overlay--loading");
		loading_overlay.fadeOut(500);
})();

// Fixed footer
// If content is shorter than screen - footer size, apply fixed class.
function FixedFooter(){
	var $footer = $(".footer"),
		$footerHeight = $(".footer").outerHeight(),
		$content = $(".wrap"),
		screenHeight = $(window).height();

	if ($content.outerHeight() < screenHeight - $footerHeight) {
		$footer.addClass("fixed--footer");
	}
	else {
		$footer.removeClass("fixed--footer");
	}
}

(function() {
	if(FixedFooterOn === true) { // boulean set at the top of this file.
		$(window).resize(function() {
		  	FixedFooter(); 	// Run Fixed Footer on resize.
		});
			FixedFooter();  // Run Fixed Footer on load of page.
	}
})();




