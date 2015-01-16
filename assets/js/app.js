

// Unwrap Images
$("p:has(img)").contents().unwrap();

// Add current url links active class
$("a").filter(function() {
    return this.href === document.location.href;
}).addClass("active");


//Overlay FadeIn
(function() {
	var loading_overlay = $(".overlay--loading");
		loading_overlay.delay(100).fadeOut(250);
})();

//Mobile Menu
(function() {
	var menuTrigger 	= $(".mobile-button--open");
		menu 			= $("header");

	menuTrigger.on("click", function(e) {
		e.preventDefault();

		if(menu.hasClass("hidden")) {
			menu.removeClass("hidden");
			menu.fadeIn(500);
		}
		else {
			menu.addClass("hidden");
			menu.fadeOut(500);
		}

	})
})();










