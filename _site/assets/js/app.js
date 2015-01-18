

// Unwrap Images
// for images inside p tags
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
		menu 			= $("header"),
		menuOverlay		= $(".overlay--menu");

	menuTrigger.on("click", function(e) {
		e.preventDefault();

		// SHOW MENU
		if(menu.hasClass("hidden")) {
			menu.removeClass("hidden");
			menu.fadeIn(500);

			menuOverlay.delay(200).fadeIn(200);

			menuTrigger.addClass("open");
		}
		// HIDE MENU
		else {
			menu.addClass("hidden");
			menu.fadeOut(500);

			menuOverlay.fadeOut(500);

			menuTrigger.removeClass("open");
		}
	})
	menuOverlay.on("click", function(e) {
		e.preventDefault();
		menu.addClass("hidden");
		menu.fadeOut(500);
		menuOverlay.fadeOut(600);
		menuTrigger.removeClass("open");
	})


})();










